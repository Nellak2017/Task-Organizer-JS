import { StyledDatePicker } from './CalendarEventForm.elements.js';
import { useState } from 'react';
import moment from 'moment';

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


export const CalendarEventForm = () => {
    
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);


    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <>
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
                <StyledDatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={start => setNewEvent({ ...newEvent, start })}
                />
                <StyledDatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={end => setNewEvent({ ...newEvent, end })}
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

export default CalendarEventForm;