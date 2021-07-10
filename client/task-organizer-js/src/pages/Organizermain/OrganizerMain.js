import { SideNav, InfoSummary, TableContent } from "../../components";
import { InfoSummaryData, TableContentData } from "../../pages/OrganizerMain/Data";
// TODO: Add Media Queries for Responsive Design
// TODO: Find out how to pass props to components passed as props
const OrganizerMain = () => {
    return ( 
        <>
        <SideNav />
        {InfoSummaryData.map( (value,key) => {
            return (
                <InfoSummary key={key} MyComponent={TableContent} Data={[value]} ComponentData={TableContentData}/>
            );
        })
        }
        </>
     );
}
 
export default OrganizerMain;