import React, { useState, useEffect } from 'react';
import { SideNav, TodoViewSubNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/TodoView/Data";
import { plainConfigsToUsableConfigs } from "../../state/transformers/transformers.js";

import { useSelector, useDispatch } from 'react-redux';
import { store } from "../../state/store";

// TODO: Finish up this page with the other components
// TODO: Possibly put the full Table in the Redux store, think about it later

// TODO: Finish up the CRUD capabilities by adding the CD part of it. To do this, you must convert the MasterConfig into the proper data for this component
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

        console.log("I just set the state of the InfoSummaryDataCopy")
    }, [state.MasterData]);
    
    
    //console.log("Store state right now");
    //console.log(state.MasterData);
    /*
    store.subscribe(() => {
        
        //let copy = InfoSummaryDataCopy;
        //copy = inject(copy);
        //setInfoSummaryDataCopy(copy.slice());
        
       console.log("HEY THE STORE CHANGED");
       console.log("It is: ");
       console.log(store.getState().MasterData);
    });
    */

    console.log("InfoSummaryDataCopy")
    console.log(InfoSummaryDataCopy)

    // So it seems like the bug in this is that when we pass Store Copy to InfoSummaryDataCopy, it is not being updated properly for some reason

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