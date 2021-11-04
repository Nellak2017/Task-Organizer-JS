import { SideNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/OrganizerMain/Data";
import { OrganizerMainTableSummary, plainConfigsToUsableConfigs } from "../../state/transformers/transformers.js";

import { useState } from "react";
import { useSelector } from 'react-redux'; 
import { store } from "../../state/store";


import * as RiIcons from 'react-icons/ri'; // ONLY FOR TESTING THE NEW FUNCTIONS!

// TODO: Add Media Queries for Responsive Design
// NOTE: MAKE SURE TO PASS COMPONENTS OF THE FORM ({props}) => {return <Component props={props}>} FROM Data TO MyComponent SO NO ERRORS OCCUR! IT TOOK 3 HOURS OF DEBUGGING TO FIGURE OUT NOT TO PASS OBJECTS BUT COMPONENTS TO THIS PROP!
const OrganizerMain = () => {

    // Use the State of the Store
    const state = useSelector((state) => state);
    
    // Mirror the State of the Store with InfoSummaryData updates
    const [InfoSummaryDataCopy, setInfoSummaryDataCopy] = useState(InfoSummaryData);

    // TESTING the plainConfigsToUsableConfigs function

    const mockData = [
        {
            title: 'High Priority Tasks',
            icon: '',
            iconComponent: '',
            text: 'See All',
            link: 'TodoView',
            tableHeaders: ['task','due','priority','status','periodicity'],
            data: '',
            component: "TableContent"
        },

        {
            title: 'Thread Summary',
            icon: <RiIcons.RiTodoLine className="icon" />,
            iconComponent: '',
            text: '',
            link: '',
            tableHeaders: '',
            data: '',
            component: "GridContent"
        }

    ];
    console.log("f(mockData) -> ??? ");
    console.log(plainConfigsToUsableConfigs(mockData));

    // Every time the store updates, inject the InfoSummaryDataCopy with the OrganizerMain perspective of the Store
    store.subscribe( () => {
        let copy = InfoSummaryData;
        copy[0].data = OrganizerMainTableSummary(store.getState().MasterData); // The data in this table is subset of Master Data
        setInfoSummaryDataCopy(copy.slice());
    });

    return (
        <>
            <SideNav />
            {InfoSummaryDataCopy.map((value, key) => {
                return (
                    <InfoSummary key={JSON.stringify(state.MasterData)+key} MyComponent={value.component} Data={[value]} TableHeaders={[TableHeaderData]} />
                );
            })
            }
        </>
    );
}

export default OrganizerMain;