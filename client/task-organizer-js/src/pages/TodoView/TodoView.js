import React, { useState, useEffect } from 'react';
import { SideNav, TodoViewSubNav, InfoSummary } from "../../components";
import { plainConfigsToUsableConfigs } from "../../state/transformers/transformers.js";

import { useSelector } from 'react-redux';

// TODO: Finish up this page with the other components
const TodoView = () => {

    // Helper to generalize the Injection Logic
    const inject = (StoreData) => {
        const TABLE_CONTENT = "TableContent";

        for (let componentNum in StoreData) {
            switch (StoreData[componentNum].name) { // Switch based on the name of the component
                case TABLE_CONTENT:
                    StoreData[componentNum].data = state.MasterData;
                    break;
                default:
                    break;
            }
        }
        return StoreData;
    }

    // Use the State of the Store
    const state = useSelector((state) => state);

    // Inject the initial data into our transformed Store data
    const StoreCopy = inject(plainConfigsToUsableConfigs(state.MasterConfigs.TodoView));

    // Mirror the State of the Store with InfoSummaryData updates
    const [InfoSummaryDataCopy, setInfoSummaryDataCopy] = useState(StoreCopy);

    // Every time the store updates, inject the InfoSummaryDataCopy with the OrganizerMain perspective of the Store
    useEffect(() => { 
        let copy = InfoSummaryDataCopy;
        copy = inject(copy);
        setInfoSummaryDataCopy(copy.slice());
    }, [state.MasterData]);

return (
    <>
        <SideNav />
        <TodoViewSubNav />
        {InfoSummaryDataCopy.map((value, key) => {
            return (
                <InfoSummary key={JSON.stringify(InfoSummaryDataCopy) + key} MyComponent={value.component} Data={[value]} TableHeaders={[value.tableHeaders]} Name={"TodoView"} />
            );
        })
        }
    </>
);
}

export default TodoView;