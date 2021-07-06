import { SideNav, InfoSummary, TableContent } from "../../components";

const OrganizerMain = () => {
    return ( 
        <>
        <SideNav />
        <InfoSummary MyComponent={TableContent} />
        </>
     );
}
 
export default OrganizerMain;