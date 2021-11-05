import { SideNav } from "../../components";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment  from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

/*
const locales = {
    "en-US": require("moment/locale/en-US")
};
*/

const localizer = momentLocalizer(moment);

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new moment('16:30, 8Nov2021', 'HH:mm, DMMMYYYY'),
        end: new moment('16:30, 9Nov2021', 'HH:mm, DMMMYYYY'),
    },
    {
        title: "Vacation",
        allDay: true,
        start: new moment('16:30, 8Nov2021', 'HH:mm, DMMMYYYY'),
        end: new moment('16:30, 9Nov2021', 'HH:mm, DMMMYYYY'),
    }
];


const Calendars = () => {

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events);
    

    return (
        <>
            <SideNav />
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
            />
        </>
    );
}

export default Calendars;