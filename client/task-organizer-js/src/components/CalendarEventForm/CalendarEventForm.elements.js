import styled from 'styled-components';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const StyledDatePicker = styled(DatePicker)`

`;
 
export const EventFormContainer = styled.div`
    position: absolute; // must be absolute so that you can have it in the center easily
    top: 25%; 
    right: 40%;
    width: 25rem;
    height: 20rem; 
    border-radius: 1rem;
    z-index: 999 !important;
    border: 1px solid white;
    background-color: rgb(34,39,46);
    
    h1,h2,h3,h4,h5,h6 {
        color: white;
        text-align: center;
    }
`;

export default StyledDatePicker;