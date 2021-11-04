import { SideNav, InfoSummary } from "../../components";
import { OrganizerMainTableSummary, plainConfigsToUsableConfigs, OrganizerMainGridSummary } from "../../state/transformers/transformers.js";

import { useState } from "react";
import { useSelector } from 'react-redux';
import { store } from "../../state/store";

// TODO: Add Media Queries for Responsive Design
// NOTE: MAKE SURE TO PASS COMPONENTS OF THE FORM ({props}) => {return <Component props={props}>} FROM Data TO MyComponent SO NO ERRORS OCCUR! IT TOOK 3 HOURS OF DEBUGGING TO FIGURE OUT NOT TO PASS OBJECTS BUT COMPONENTS TO THIS PROP!
// Todo: Add a loop that will add the appropriate data, instead of doing it by hand like right now, as in line 23 and 24
const OrganizerMain = () => {

    // Use the State of the Store
    const state = useSelector((state) => state);

    // Manually inject the initial data into our transformed Store data
    let StoreCopy = plainConfigsToUsableConfigs(state.MasterConfigs.OrganizerMain);
    StoreCopy[0].data = OrganizerMainTableSummary(state.MasterData);
    StoreCopy[1].data = OrganizerMainGridSummary(state.MasterData);

    // Mirror the State of the Store with InfoSummaryData updates
    const [InfoSummaryDataCopy, setInfoSummaryDataCopy] = useState(StoreCopy);

    // Every time the store updates, inject the InfoSummaryDataCopy with the OrganizerMain perspective of the Store
    store.subscribe(() => {
        let copy = InfoSummaryDataCopy;
        copy[0].data = OrganizerMainTableSummary(state.MasterData); // The data in this table is subset of Master Data
        copy[1].data = OrganizerMainGridSummary(state.MasterData);
        setInfoSummaryDataCopy(copy.slice());
    });

    return (
        <>
            <SideNav />
            {InfoSummaryDataCopy.map((value, key) => {
                return (
                    <InfoSummary key={JSON.stringify(state.MasterData) + key} MyComponent={value.component} Data={[value]} TableHeaders={[InfoSummaryDataCopy[key].tableHeaders]} />
                );
            })
            }
        </>
    );
}

export default OrganizerMain;