import React from "react";
import { SideNav, InfoSummary, TableContent } from "../../components";

// TODO: Add Media Queries for Responsive Design
// TODO: Find out how to pass props to components passed as props
const OrganizerMain = () => {
    return ( 
        <>
        <SideNav />
        <InfoSummary MyComponent={TableContent} />
        </>
     );
}
 
export default OrganizerMain;