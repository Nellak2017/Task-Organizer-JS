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
                    const item = masterConfig[row].Header.toLowerCase();
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
                    component: ({ data, tableHeaders }) => { return <TableContent data={data} tableHeaders={tableHeaders} templates={DefaultRowTemplate} /> }
                }
                ADAPTED.push(adaptedTable);
                break;
    
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
                    component: ({ data }) => { return <GridContent data={data} /> }
                }
                ADAPTED.push(adaptedGrid);
                break;
            default:
                ADAPTED.push(plainConfigs[item]);
                break;
        }
    }
    return ADAPTED;
}



// -----------------------------------------------------------------------------------
// -------------------------------- DATA TRANSFORMERS --------------------------------
// -----------------------------------------------------------------------------------

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

export const OrganizerMainThreadSummary = (MasterData) => {
    return (0);
}

export const TodoViewTasksTable = (MasterData) => {
    return (0);
}