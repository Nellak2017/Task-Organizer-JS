import { SideNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/OrganizerMain/Data";
import { OrganizerMainTableSummary } from "../../state/transformers/transformers.js";
import { masterData } from "../../state/masterData/masterData.js";

import { useSelector } from 'react-redux'; 
import { store } from "../../state/store";

// TODO: Add Media Queries for Responsive Design
// NOTE: MAKE SURE TO PASS COMPONENTS OF THE FORM ({props}) => {return <Component props={props}>} FROM Data TO MyComponent SO NO ERRORS OCCUR! IT TOOK 3 HOURS OF DEBUGGING TO FIGURE OUT NOT TO PASS OBJECTS BUT COMPONENTS TO THIS PROP!
const OrganizerMain = () => {

    // Use the State of the Store
    const state = useSelector((state) => state);

    console.log("Testing out the OrganizerMainTableSummary function in Organizer Main ");
    console.log(OrganizerMainTableSummary(masterData));

    console.log("InfoSummaryData for OrganizerMain");
    console.log(InfoSummaryData);

    console.log("The store's state in OrganizerMain");
    console.log(store.getState().TodoViewTable);

    return (
        <>
            <SideNav />
            {InfoSummaryData.map((value, key) => {
                return (
                    <InfoSummary key={key} MyComponent={value.component} Data={[value]} TableHeaders={[TableHeaderData]} />
                );
            })
            }
        </>
    );
}

export default OrganizerMain;