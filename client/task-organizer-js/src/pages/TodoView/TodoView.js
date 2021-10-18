import React, { useState, useCallback } from 'react';
import { SideNav, TodoViewSubNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/TodoView/Data";

import { useSelector } from 'react-redux';
import { store } from "../../state/store";

// TODO: Finish up this page with the other components
// TODO: Possibly put the full Table in the Redux store, think about it later
const TodoView = () => {

    // Use the State of the Store
    const state = useSelector((state) => state);

    // Mirror the State of the Store with InfoSummaryData updates
    const [InfoSummaryDataCopy, setInfoSummaryDataCopy] = useState(InfoSummaryData);

    // This is called when the Store Changes.. 
    // It updates the child component if you put the relevant store information as a 
    // JSON string in the key prop! If you don't, then React doesn't know when to update the component
    store.subscribe( () => {
        const copy = InfoSummaryData;
        copy[0].data = store.getState().TodoViewTable;
        setInfoSummaryDataCopy(copy.slice());
    });

    return (
        <>
            <SideNav />
            <TodoViewSubNav />
            {InfoSummaryDataCopy.map((value,key) => {
            return (
                <InfoSummary key={JSON.stringify(state.TodoViewTable)} MyComponent={value.component} Data={[value]} TableHeaders={[TableHeaderData]}/>
            );
        })
        }
        </>
    );
}

export default TodoView;