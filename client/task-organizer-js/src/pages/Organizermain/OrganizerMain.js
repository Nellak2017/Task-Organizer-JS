import { SideNav, InfoSummary } from "../../components";
import { OrganizerMainTableSummary, plainConfigsToUsableConfigs, OrganizerMainGridSummary } from "../../state/transformers/transformers.js";

import { useState } from "react";
import { useSelector } from 'react-redux';
import { store } from "../../state/store";

// TODO: Add Media Queries for Responsive Design
// NOTE: MAKE SURE TO PASS COMPONENTS OF THE FORM ({props}) => {return <Component props={props}>} FROM Data TO MyComponent SO NO ERRORS OCCUR! IT TOOK 3 HOURS OF DEBUGGING TO FIGURE OUT NOT TO PASS OBJECTS BUT COMPONENTS TO THIS PROP!
// Todo: Add a loop that will add the appropriate data, instead of doing it by hand like right now, as in line 23 and 24
const OrganizerMain = () => {

    // Helper to generalize the Injection Logic
    const inject = (StoreData) => {
        const TABLE_CONTENT = "TableContent";
        const GRID_CONTENT = "GridContent";

        for (let componentNum in StoreData) {
            switch (StoreData[componentNum].name) { // Switch based on the name of the component
                case TABLE_CONTENT:
                    StoreData[componentNum].data = OrganizerMainTableSummary(state.MasterData);
                    continue;
                case GRID_CONTENT:
                    StoreData[componentNum].data = OrganizerMainGridSummary(state.MasterData);
                    continue;
                default:
                    continue;
            }
        }
        return StoreData;
    }

    // Use the State of the Store
    const state = useSelector((state) => state);

    // Inject the initial data into our transformed Store data
    const StoreCopy = inject(plainConfigsToUsableConfigs(state.MasterConfigs.OrganizerMain));

    // Mirror the State of the Store with InfoSummaryData updates
    const [InfoSummaryDataCopy, setInfoSummaryDataCopy] = useState(StoreCopy);

    // Every time the store updates, inject the InfoSummaryDataCopy with the OrganizerMain perspective of the Store
    
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