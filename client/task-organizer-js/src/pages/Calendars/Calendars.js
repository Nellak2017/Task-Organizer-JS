import { SideNav } from "../../components";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { moment } from 'moment';
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
        start: moment().toDate(),
        end: moment()
            .add(1, "days")
            .toDate(),
    },
    {
        title: "Vacation",
        allDay: true,
        start: moment().toDate(),
        end: moment()
            .add(7, "days")
            .toDate(),
    }
];


const Calendars = () => {
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