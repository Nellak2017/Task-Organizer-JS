import { StyledCalendar } from './Calendar.elements.js';
import { useState } from 'react';
import moment from 'moment';

export const Calendar = ({localizer, events, startAccessor, endAccessor, style}) => {
    return ( 
        <StyledCalendar localizer={localizer} events={events} startAccessor={startAccessor} endAccessor={endAccessor} style={style}/>
     );
}
 
export default Calendar;