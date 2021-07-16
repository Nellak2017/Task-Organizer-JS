import { SideNav, InfoSummary } from "../../components";
import { InfoSummaryData } from "../../pages/OrganizerMain/Data";
// TODO: Add Media Queries for Responsive Design
// NOTE: MAKE SURE TO PASS COMPONENTS OF THE FORM ({props}) => {return <Component props={props}>} FROM Data TO MyComponent SO NO ERRORS OCCUR! IT TOOK 3 HOURS OF DEBUGGING TO FIGURE OUT NOT TO PASS OBJECTS BUT COMPONENTS TO THIS PROP!
const OrganizerMain = () => {
    return ( 
        <>
        <SideNav />
        {InfoSummaryData.map((value,key) => {
            return (
                <InfoSummary key={key} MyComponent={value.component} Data={[value]}/>
            );
        })
        }
        </>
     );
}
 
export default OrganizerMain;