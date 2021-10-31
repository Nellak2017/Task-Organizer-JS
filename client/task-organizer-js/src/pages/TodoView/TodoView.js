import React, { useState } from 'react';
import { SideNav, TodoViewSubNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/TodoView/Data";

import { useSelector } from 'react-redux';
import { store } from "../../state/store";

// TODO: Finish up this page with the other components
// TODO: Possibly put the full Table in the Redux store, think about it later

// TODO: Finish up the CRUD capabilities by adding the CD part of it. To do this, you must convert the MasterConfig into the proper data for this component
const TodoView = () => {

    // Use the State of the Store
    const state = useSelector((state) => state);
    
    // Mirror the State of the Store with InfoSummaryData updates
    const [InfoSummaryDataCopy, setInfoSummaryDataCopy] = useState(InfoSummaryData);

    // It updates the child component if you put the relevant store information as a 
    // JSON string in the key prop! If you don't, then React doesn't know when to update the component
    store.subscribe( () => {
        let copy = InfoSummaryData;
        copy[0].data = store.getState().MasterData; // There is no transformation to be done here, it is raw only 
        setInfoSummaryDataCopy(copy.slice());
    });

    return (
        <>
            <SideNav />
            <TodoViewSubNav />
            {InfoSummaryDataCopy.map((value,key) => {
            return (
                <InfoSummary key={JSON.stringify(state.MasterData)+key} MyComponent={value.component} Data={[value]} TableHeaders={[TableHeaderData]} Name={"TodoView"}/>
            );
        })
        }
        </>
    );
}

export default TodoView;