// This file contains all the functions that will return a representation of the store state 
// that is compatible with a component

import { TableContent, GridContent } from "../../components";
import { TableHeaderData, DefaultRowTemplate } from "../../pages/TodoView/Data.js";


// -----------------------------------------------------------------------------------
// -------------------------------- HELPER FUNCTIONS ---------------------------------
// -----------------------------------------------------------------------------------

// Helper Method that will take a single Object and return another Object with only the allowed keys
const filterObject = (rawData, allowedData) => {
    return (
        Object.keys(rawData)
            .filter(key => allowedData.includes(key))
            .reduce((obj, key) => {
                obj[key] = rawData[key];
                return obj;
            }, {})
    );
}

// Transforms a Component name in the store into the proper Component by passing it into this higher-order function here
export const nameToComponentFunction = (name) => {
    switch (name) {
        case "TableContent":
            return ({ data, tableHeaders }) => { return <TableContent data={data} tableHeaders={tableHeaders} templates={DefaultRowTemplate} /> }
        case "GridContent":
            return ({ data }) => { return <GridContent data={data} /> }
        default:
            return () => { return <div>Sorry, but the Component you tried to make is undefined. Check the Component param inside of your Store.</div> }
    }
};

// -----------------------------------------------------------------------------------
// -------------------------------- CONFIG TRANSFORMERS ------------------------------
// -----------------------------------------------------------------------------------


// Adapter function that will convert plain JSON configs from store 
// into the format that will be used by the application
// Note: This assumes that we have a list of InfoSummaries being used
// Note: we will have to solve the Adapter issue, as it likely doesn't scale
// Note: most likely solution to the Adapter issue, is to add Component to
//       all input config data so that you can adapt properly no matter what 

export const plainConfigsToUsableConfigs = (plainConfigs) => {

    const TABLE_CONTENT = 'TableContent';
    const GRID_CONTENT = 'GridContent';

    let ADAPTED = [];
    for (let item in plainConfigs) {

        // This function must take into account the different types of components for a passed in Configs file
        switch (plainConfigs[item].component) {
            case TABLE_CONTENT:
                // Get Proper Headers
                // input: [allowed headers] , output: [non-plain injected obj] called adaptedTableHeaders
                const masterConfig = TableHeaderData; // Array of objects, contains master copy of tableHeaders
                const allowedTableHeaders = plainConfigs[item].tableHeaders; // Array of Strings, list of allowed values
                let adaptedTableHeaders = []; // table headers for Component

                for (let row in masterConfig) {
                    const item = masterConfig[row].accessor.toLowerCase();
                    if (allowedTableHeaders.includes(item)) { adaptedTableHeaders.push(masterConfig[row]); }
                }

                // Inject Proper Headers and Component
                // Note, Data will be injected later by something else
                const adaptedTable = {
                    title: plainConfigs[item].title,
                    icon: plainConfigs[item].icon,
                    iconComponent: plainConfigs[item].iconComponent,
                    text: plainConfigs[item].text,
                    link: plainConfigs[item].link,
                    tableHeaders: adaptedTableHeaders,
                    data: [],
                    name: TABLE_CONTENT,
                    component: ({ data, tableHeaders }) => { return <TableContent data={data} tableHeaders={tableHeaders} templates={DefaultRowTemplate} /> }
                }
                ADAPTED.push(adaptedTable);
                continue;

            case GRID_CONTENT:
                // Inject Proper Headers and Component
                // Note, Data will be injected later by something else
                const adaptedGrid = {
                    title: plainConfigs[item].title,
                    icon: plainConfigs[item].icon,
                    iconComponent: plainConfigs[item].iconComponent,
                    text: plainConfigs[item].text,
                    link: plainConfigs[item].link,
                    tableHeaders: plainConfigs[item].tableHeaders,
                    data: [],
                    name: GRID_CONTENT,
                    component: ({ data }) => { return <GridContent data={data} /> }
                }
                ADAPTED.push(adaptedGrid);
                continue;
            default:
                ADAPTED.push(plainConfigs[item]);
                break;
        }
    };
    return ADAPTED;
}



// -----------------------------------------------------------------------------------
// -------------------------------- DATA TRANSFORMERS --------------------------------
// -----------------------------------------------------------------------------------

export const ThreadViewLargeTableSummary = (MasterData) => {
    // These are the allowed table columns for OrganizerMain
    const allowed = ['task', 'due', 'priority', 'status'];

    return (
        // For each Object in the Master Data, apply the filterObject function to filter out the items that are irrelevant to this page
        MasterData.map((value, key) => {
            return (
                filterObject(value, allowed)
            );
        })
    );  
}



export const OrganizerMainTableSummary = (MasterData) => {
    // These are the allowed table columns for OrganizerMain
    const allowed = ['task', 'due', 'priority', 'status', 'periodicity'];

    return (
        // For each Object in the Master Data, apply the filterObject function to filter out the items that are irrelevant to this page
        MasterData.map((value, key) => {
            return (
                filterObject(value, allowed)
            );
        })
    );  
}

// Adapter for the OrganizerMain table summary. It has been lightly tested. Beware of this function.
export const OrganizerMainGridSummary = (MasterData) => {
    let gridObjs = [];
    let uniqueThreads = new Set();
    let threadPriorityDictionary = {};
    const initialGridObj = {
        taskCount: 0,
        subThreadCount: 0,
        priority: 'Low'
    };
    const weights = {
        "Low": 1,
        "Medium": 2,
        "High": 3
    };
    const inverseWeights = {
        1: "Low",
        2: "Medium",
        3: "High"
    };

    for (let task in MasterData) {

        const threadName = MasterData[task].parent_thread;
        const taskPriority = MasterData[task].priority;

        // Test if the thread is already in the set 
        const priorLen = uniqueThreads.size;
        uniqueThreads.add(threadName);
        const postLen = uniqueThreads.size;


        // if the loop found a new thread
        if (priorLen < postLen) {

            // Note, do not do simple assignment, or it will copy by reference instead of by value
            let gridObj = JSON.parse(JSON.stringify(initialGridObj)); // use the template to add a new grid to the JSON

            gridObj.taskCount = 1; // the number of tasks in this thread is always 1 if you make it to this block
            gridObj.priority = taskPriority; // if it is a new thread, then the priority is whatever that priority was

            gridObjs[threadName] = gridObj; // try and make a threadName: {obj} in the dictionary

            threadPriorityDictionary[threadName] = weights[taskPriority];
        }
        // if the loop finds a thread it encountered before
        else {
            // let the priority be the closest average to low,med, or high

            gridObjs[threadName].taskCount += 1;

            const len = gridObjs[threadName].taskCount;
            const last = weights[taskPriority];

            threadPriorityDictionary[threadName] = Math.round(((threadPriorityDictionary[threadName] * (len - 1)) + last) / len);
            const newAvg = threadPriorityDictionary[threadName];

            if (newAvg > 3 || newAvg < 0) {
                console.error("Warning. You used a NewAverage Value greater than 3 or less than 0 in transformers.js in OrganizerMainGridSummary in the else clause");
            }

            gridObjs[threadName].priority = inverseWeights[newAvg];
        }
    }
    // Note: the way the grid object is now (convienent form to read), does not work with the original data reader
    // So we have to transform it one last time
    let transform = Object.entries(gridObjs);
    for (let i in transform) {
        const threadName = transform[i][0];
        const otherStuff = transform[i][1]
        transform[i] = otherStuff;
        transform[i]["thread"] = threadName;
    }


    return transform;
}

export const OrganizerMainThreadSummary = (MasterData) => {
    return (0);
}

export const TodoViewTasksTable = (MasterData) => {
    return (0);
}