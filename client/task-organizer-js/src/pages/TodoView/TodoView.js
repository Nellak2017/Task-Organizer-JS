import React, { useState, useCallback } from 'react';
import { SideNav, TodoViewSubNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/TodoView/Data";

import { useSelector } from 'react-redux';
import { store } from "../../state/store";

// TODO: Fix the Redux Component Update Problem so that TodoView can talk to InfoSummaryData
const TodoView = () => {

    // Use the State of the Store
    const state = useSelector((state) => state);

    // Mirror the State of the Store with InfoSummaryData updates
    const [InfoSummaryDataCopy, setInfoSummaryDataCopy] = useState(InfoSummaryData);

    /* 
        Right now I have a problem implementing this redux solution of TodoView talking to InfoSummaryData
        I made my action creator, my reducer, and my store too.. 
        BUT..
        I can't make this component update when the store is updated as well..

        possible solutions??

        Research React to see why it wouldn't update, immediately
        Force update
        Make the store exactly like the passed in data to the component
        Add a new prop to the Component
        Pass the state by lifting state 
        Just use the Context API

        Implementing the Force update "solution" I got this error:

        "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        at TodoView (http://localhost:3000/static/js/main.chunk.js:10115:80)"

        Has something to do with UseEffect hook maybe??

        https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    */

    // Test this Force update method
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    // Supposedly this is called when the Store Changes.. but it doesn't seem to update the Component!
    store.subscribe( () => {
        let copy = InfoSummaryData;
        copy[0].data = store.getState().TodoViewTable;
        setInfoSummaryDataCopy([...copy]);

        console.log("Inside Unsubscribe");

        console.log("The InfoSummaryDataCopy");
        console.log(InfoSummaryDataCopy);

        forceUpdate();
        console.log("I Literally Just forced an update inside Subscribe");
    });


    console.log("BEFORE UPDATING STORE:");
    console.log(state.TodoViewTable);

    console.log("InfoSummaryDataCopy:")
    console.log(InfoSummaryDataCopy[0].data);

    return (
        <>

            <SideNav />
            <TodoViewSubNav />
            {InfoSummaryDataCopy.map((value,key) => {
            return (
                <InfoSummary key={key} MyComponent={value.component} Data={[value]} TableHeaders={[TableHeaderData]}/>
            );
        })
        }
        </>
    );
}

export default TodoView;