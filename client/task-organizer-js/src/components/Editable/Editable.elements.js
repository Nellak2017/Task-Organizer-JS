import styled from 'styled-components';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

export const StyledEditableCell = styled.input`
    border: none;
    background: transparent;
    text-align: center;
    color: white;
`;

export const StyledDateTimePicker = styled(DateTimePicker)`
    width: 90%;
    //&.MuiInput-underline:before{
    //    border-bottom: 0;
    //}
    &.MuiFormControl-root{
        vertical-align: middle;
        min-width: 14rem;
    }
    .MuiInput-underline:before{
        content:none!important;
    }
    .MuiInput-underline:after{
        content:none!important;
    }
`;

export const StyledSelect = styled.select`
    background-color: transparent;
    border: 0;
    font-size: 1rem;
    & option {
        color: black;
        border-radius: 1rem;
    }
`;

export default StyledEditableCell;

/* Need: 
Due -> Date picker, // https://material-ui-pickers.dev/getting-started/usage
Time to Complete -> time picker, // https://material-ui-pickers.dev/getting-started/usage
Priority, Periodicity, Pipelinable -> Drop Down Selection

*/ 