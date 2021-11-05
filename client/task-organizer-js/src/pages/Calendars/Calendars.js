import { SideNav } from "../../components";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { moment } from 'moment';

const localizer = momentLocalizer(moment);

const Calendars = () => {
    return (
        <>
            <SideNav />

        </>
    );
}

export default Calendars;