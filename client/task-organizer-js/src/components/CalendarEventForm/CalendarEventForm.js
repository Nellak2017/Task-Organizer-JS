import { 
    StyledDatePicker,
    EventFormContainer 
} from './CalendarEventForm.elements.js';
import { useState } from 'react';
import moment from 'moment';

/* TODO: 
    - [ ] Add X to close container when user doesn't want this Component anymore
    - [ ] Attach Store state instead of dummy data to this and to the Calendar too
    - [ ] Fix the styling of this component so it looks like a legitimate form
 */


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
        <EventFormContainer>
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
        </EventFormContainer>
    );
}

export default CalendarEventForm;