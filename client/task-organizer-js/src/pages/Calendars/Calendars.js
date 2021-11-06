import { SideNav } from "../../components";
import { Calendar } from "../../components/Calendar/Calendar.js";
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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

/*
TODO:
sources: 
https://codesandbox.io/s/jp1931172w?file=/src/index.js,
https://www.youtube.com/watch?v=KUKyTRYGrnU&t=129s,
https://duckduckgo.com/?q=dark+theme+calendar&atb=v181-1&iax=images&ia=images&iai=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F636775%2Fscreenshots%2F3158395%2Ffor_dribbble.png
https://www.youtube.com/watch?v=e0cZz7rhn7Y

- [X] Figure out the styles to modify in Styled Component or Wrapper
- [ ] Use masterData to compute Events (Figure out allDay exception later)
- [ ] Create a Calendar form Component, use inpiration from here: https://www.youtube.com/watch?v=KUKyTRYGrnU&t=129s,
https://duckduckgo.com/?q=dark+theme+calendar&atb=v181-1&iax=images&ia=images&iai=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F636775%2Fscreenshots%2F3158395%2Ffor_dribbble.png
- [ ] Properly Style the Calendar to be a good Dark theme
- [ ] Add dnd to the Calendar
*/

const Calendars = () => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);


    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
    }


    return (
        <>
            <SideNav />
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px", color: "#fff" }}
            />
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input 
                type="text" 
                placeholder="Add Title" 
                style={{ width: "20%", marginRight: "10px" }}
                value={newEvent.title} 
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker
                placeholderText="Start Date"
                style={{marginRight: "10px" }}
                selected={newEvent.start} 
                onChange={start => setNewEvent({ ...newEvent, start})}
                />
                <DatePicker
                placeholderText="End Date"
                selected={newEvent.end} 
                onChange={end => setNewEvent({ ...newEvent, end})}
                />
                <button 
                style={{ marginTop: "10px" }} 
                onClick={handleAddEvent}
                >
                    Add Event
                </button>
            </div>
        </>
    );
}

export default Calendars;