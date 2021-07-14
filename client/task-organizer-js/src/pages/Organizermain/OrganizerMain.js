import { SideNav, InfoSummary, TableContent, GridContent } from "../../components";
import { InfoSummaryData, TableContentData, GridContentData } from "../../pages/OrganizerMain/Data";
// TODO: Add Media Queries for Responsive Design
// TODO: Find out how to pass props to components passed as props
// TODO: Find out how to pass the component alias in as a prop so you can have 1 map for all components, otherwise you will need to re-write InfoSummary Component many times passing in new props each time...

const OrganizerMain = () => {
    return ( 
        <>
        <SideNav />
        {InfoSummaryData.map( (value,key) => {
            return (
                <>
                <InfoSummary key={key} MyComponent={GridContent} Data={[value]} ComponentData={GridContentData}/>
                </>
            );
        })
        }
        </>
     );
}
 
export default OrganizerMain;