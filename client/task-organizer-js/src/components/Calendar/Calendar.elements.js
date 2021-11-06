import styled from 'styled-components';
import { Calendar } from 'react-big-calendar';

import "react-big-calendar/lib/css/react-big-calendar.css";

export const StyledCalendar = styled(Calendar)`
    .rbc-toolbar{
        background-color: rgb(34,39,46); 
        color: #fff;
        font-size: 2rem;
    }

    .rbc-toolbar button{
        color: white;
        background-color: rgb(34,39,46); 
    }

    .rbc-month-view{ 
        border-radius: .2rem;
        background: rgb(34,39,46);
    }

    .rbc-month-header{ 
        font-size: 1.4rem; 
        background-color: #363636
    }

    .rbc-day-bg:hover{ 
        background-color: rgb(102,184,255);
    }

    .rbc-day-bg .rbc-today { 
        background: slateblue;
    }

    .rbc-today {
        background-color: slateblue;
    }

    .rbc-off-range-bg { 
        background: rgb(16,21,34);
    } 

    .rbc-event { 
        background-color: rgb(26,131,255);
    }

    .rbc-event:hover {
        background-color: slateblue;
    }

    .rbc-active { 
        background-color: slateblue!important;
    }

    .rbc-active:hover {
        background-color: rgb(26,131,255);
        color: #fff;
    }

    .rbc-toolbar button:hover {
        background-color: rgb(26,131,255);
    }
`;