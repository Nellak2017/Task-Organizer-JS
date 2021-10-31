// This file contains all the functions that will return a representation of the store state 
// that is compatible with a component

import { TableContent, GridContent } from "../../components";

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
            return ({ data, tableHeaders }) => { return <TableContent data={data} tableHeaders={tableHeaders} /> }
        case "GridContent":
            return ({ data }) => { return <GridContent data={data} /> }
        default:
            return () => { return <div>Sorry, but the Component you tried to make is undefined. Check the Component param inside of your Store.</div>}
    }
};


export const OrganizerMainTableSummary = (MasterData) => {
    // These are the allowed table columns for OrganizerMain
    const allowed = ['task', 'due', 'priority', 'status', 'periodicity'];

    return (
        // For each Object in the Master Data, apply the filterObject function to filter out the items that are irrelevant to this page
        MasterData.map((value,key) => {
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