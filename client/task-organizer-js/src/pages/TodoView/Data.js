import { TableContent } from "../../components";
import React from 'react';
import MomentUtils from '@date-io/moment';
import {

    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import FormatDue from '../../lib/moment/FormatDue.js';
import moment from 'moment';
import { StyledDateTimePicker, StyledSelect } from '../../components/Editable/Editable.elements.js';
import StyledEditableCell from '../../components/Editable/Editable.elements.js';


export const TableHeaderData = [
    {
        Header: 'Task',
        accessor: 'task',
    },
    {
        Header: 'Due',
        accessor: 'due',
        Cell: ({
            value: initialValue,
            row: { index },
            column: { id },
            updateMyData, // This is a custom function that we supplied to our table instance
        }) => {
            // We need to keep and update the state of the cell normally
            const [selectedDate, handleDateChange] = React.useState(new moment(initialValue)); //new moment('16:30, 8Aug2021', 'HH:mm, DMMMYYYY')

            // We'll only update the external data when the input is blurred
            const onBlur = () => { updateMyData(index, id, selectedDate) }

            return (
                <MuiPickersUtilsProvider utils={MomentUtils} >
                    <StyledDateTimePicker
                        key={index}
                        value={selectedDate}
                        onChange={handleDateChange}
                        onBlur={onBlur}
                        allowKeyboardControl={true}
                        format={FormatDue(selectedDate)} />
                </MuiPickersUtilsProvider>
            )
        }
    },
    {
        Header: 'Priority',
        accessor: 'priority',
        Cell: ({
            value: initialValue,
            row: { index },
            column: { id },
            updateMyData, // This is a custom function that we supplied to our table instance
        }) => {
            // We need to keep and update the state of the cell normally
            const [value, setValue] = React.useState(initialValue)
            const onChange = e => { setValue(e.target.value) }

            // We'll only update the external data when the input is blurred
            const onBlur = () => { updateMyData(index, id, value) }

            return (
                <StyledSelect
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </StyledSelect>
            )
        }
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({
            value: initialValue,
            row: { index },
            column: { id },
            updateMyData, // This is a custom function that we supplied to our table instance
        }) => {
            // We need to keep and update the state of the cell normally
            const [value, setValue] = React.useState(initialValue)

            const onClick = () => {
                (value === "Processing") ?
                    updateMyData(index, id, "Open") :
                    (value === "Open") ?
                        updateMyData(index, id, "Processing") :
                        updateMyData(index, id, value)
            }

            // If the initialValue is changed external, sync it up with our state
            React.useEffect(() => { setValue(initialValue) }, [initialValue])

            return (<span onClick={onClick}>{value}</span>)
        }
    },
    {
        Header: 'Weight',
        accessor: 'weight',
        Cell: ({
            value: initialValue,
            row: { index },
            column: { id },
            updateMyData, // This is a custom function that we supplied to our table instance
        }) => {
            // We need to keep and update the state of the cell normally
            const [value, setValue] = React.useState(initialValue)
            const [temp, setTemp] = React.useState("0")
            const onChange = e => { setValue(e.target.value) }

            // We'll only update the external data when the input is blurred
            const onBlur = (e) => { setTemp(value < 1 ? "1" : value > 100 ? "100" : value) ; updateMyData(index, id, temp) }

            // If the initialValue is changed external, sync it up with our state
            React.useEffect(() => { setValue(initialValue) }, [initialValue])

            return <StyledEditableCell type={"number"} min="1" max="100" id="yourid" value={value} onChange={onChange} onBlur={onBlur} />
        }
    },
    {
        Header: 'Order',
        accessor: 'order',
        Cell: ({ row: { index } }) => {
            return (
                <span>{index + 1}</span>
            )
        }
    },
    {
        Header: 'Periodicity',
        accessor: 'periodicity',
        Cell: ({
            value: initialValue,
            row: { index },
            column: { id },
            updateMyData, // This is a custom function that we supplied to our table instance
        }) => {
            // We need to keep and update the state of the cell normally
            const [NumberValue, setNumberValue] = React.useState(initialValue.replace(/\D/g, '') >= 10 ? 10 : initialValue.replace(/\D/g, '') < 1 ? 1 : initialValue.replace(/\D/g, '').trim());
            const [PeriodValue, setPeriodValue] = React.useState(initialValue.replace(/[0-9]/g, '').trim());
            const [value, setValue] = React.useState(String(NumberValue) + String(PeriodValue))

            const onChangeNumber = e => {
                setNumberValue(e.target.value.replace(/\D/g, '').trim());
                setValue(String(e.target.value.replace(/\D/g, '').trim()) + String(PeriodValue));
            }

            const onChangePeriod = e => {
                setPeriodValue(e.target.value.replace(/[0-9]/g, '').trim());
                setValue(String(NumberValue) + String(e.target.value.replace(/[0-9]/g, '').trim()));
            }

            // We'll only update the external data when the input is blurred
            const onBlur = () => {
                setValue(String(NumberValue) + String(PeriodValue));
                updateMyData(index, id, value);
            }

            return (
                <span>
                    <StyledEditableCell
                        style={
                            {
                                width: '2.5rem',
                            }
                        }
                        type={"number"}
                        min="1"
                        max="10"
                        value={NumberValue >= 10 ? 10 : NumberValue < 1 ? 1 : NumberValue}
                        onChange={onChangeNumber}
                        onBlur={onBlur}
                    />
                    <StyledSelect
                        style={
                            {
                                color: 'white',
                                appearance: 'none',
                                width: '4rem',
                                border: 0,
                                outline: 'none'
                            }
                        }
                        value={PeriodValue}
                        onChange={onChangePeriod}
                        onBlur={onBlur}>
                        <option value="hour">hour</option>
                        <option value="day">day</option>
                        <option value="week">week</option>
                        <option value="month">month</option>
                        <option value="quarter">quarter</option>
                        <option value="six month">6 month</option>
                        <option value="year">year</option>
                    </StyledSelect>
                </span>
            )
        }
    },
    {
        Header: 'Time To Complete',
        accessor: 'time_to_complete',
        Cell: ({
            value: initialValue,
            row: { index },
            column: { id },
            updateMyData, // This is a custom function that we supplied to our table instance
        }) => {
            // We need to keep and update the state of the cell normally
            const [NumberValue, setNumberValue] = React.useState(initialValue.replace(/\D/g, '').trim());
            const [PeriodValue, setPeriodValue] = React.useState(initialValue.replace(/[0-9]/g, '').trim());
            const [value, setValue] = React.useState(String(NumberValue) + String(PeriodValue));

            const onChangeNumber = e => {
                setNumberValue(e.target.value.replace(/\D/g, '').trim());
                setValue(String(e.target.value.replace(/\D/g, '').trim()) + String(PeriodValue));
            }

            const onChangePeriod = e => {
                setPeriodValue(e.target.value.replace(/[0-9]/g, '').trim());
                setValue(String(NumberValue) + String(e.target.value.replace(/[0-9]/g, '').trim()));
            }

            // We'll only update the external data when the input is blurred
            const onBlur = () => {
                const temp = NumberValue === "" ? 1 : NumberValue;
                setValue(String(temp) + String(PeriodValue));
                updateMyData(index, id, String(temp) + String(PeriodValue));
            }

            return (
                <span>
                    <StyledEditableCell
                        style={
                            {
                                width: '2.5rem',
                            }
                        }
                        type={"number"}
                        min="0"
                        max="1000"
                        value={NumberValue >= 1000 ? 1000 : NumberValue < 1 ? 1 : NumberValue}
                        onChange={onChangeNumber}
                        onBlur={onBlur}
                    />
                    <StyledSelect
                        style={
                            {
                                color: 'white',
                                appearance: 'none',
                                width: '4rem',
                                border: 0,
                                outline: 'none'
                            }
                        }
                        value={PeriodValue}
                        onChange={onChangePeriod}
                        onBlur={onBlur}>
                        <option value="seconds">seconds</option>
                        <option value="minutes">minutes</option>
                        <option value="hours">hours</option>
                        <option value="days">days</option>
                        <option value="weeks">weeks</option>
                        <option value="months">months</option>
                        <option value="years">years</option>
                    </StyledSelect>
                </span>
            )
        }
    },
    {
        Header: 'Creation Date',
        accessor: 'creation_date',
        Cell: ({  value: initialValue }) => {
            return (
                <span>{initialValue}</span>
            )
        }
    },
    {
        Header: 'Last Completion Date',
        accessor: 'last_completion_date',
        Cell: ({  value: initialValue }) => {
            return (
                <span>{initialValue}</span>
            )
        }
    },
    {
        Header: 'Parent Thread',
        accessor: 'parent_thread',
        
    },
    {
        Header: 'Pipelinable',
        accessor: 'pipelinable',
        Cell: ({
            value: initialValue,
            row: { index },
            column: { id },
            updateMyData, // This is a custom function that we supplied to our table instance
        }) => {
            // We need to keep and update the state of the cell normally
            const [value, setValue] = React.useState(initialValue)
            const onChange = e => { setValue(e.target.value) }

            // We'll only update the external data when the input is blurred
            const onBlur = () => { updateMyData(index, id, value) }

            return (
                <StyledSelect
                    style={
                        {
                            color: 'white'
                        }
                    }
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </StyledSelect>
            )
        }
    },
    {
        Header: 'Number of Dependencies',
        accessor: 'number_of_dependencies',
        Cell: ({  value: initialValue }) => {
            return (
                <span>{initialValue}</span>
            )
        }
    },
];

// This is dummy Table Content data that is supposed to be fetched
// TODO: Add drop down for Parent Thread to choose any of the existing Threads to be the parent
export const TableContentData = [

    {
        'task': 'Github (20 contribs)',
        'due': new moment('16:30, 8Aug2021', 'HH:mm, DMMMYYYY'),
        'priority': 'High',
        'status': 'Processing',
        'weight': '100',
        'order': '1',
        'periodicity': '100day',
        'time_to_complete': '5 hours',
        'creation_date': 'today',
        'last_completion_date': 'yesterday',
        'parent_thread': 'Experience',
        'pipelinable': 'No',
        'number_of_dependencies': '0',
        'id': '0',
        'completed': false
    },
    {
        'task': 'Relax',
        'due': new moment('10:30, 9Aug2021', 'HH:mm, DMMMYYYY'),
        'priority': 'Low',
        'status': 'Open',
        'weight': '50',
        'order': '2',
        'periodicity': '100day',
        'time_to_complete': '2 hours',
        'creation_date': 'today',
        'last_completion_date': 'never',
        'parent_thread': 'Domestic',
        'pipelinable': 'No',
        'number_of_dependencies': '1',
        'id': '1',
        'completed': false
    }
];

export const DefaultRowTemplate = [

    {
        'task': 'blank task',
        'due': new moment(),
        'priority': 'Medium',
        'status': 'Open',
        'weight': '50',
        'order': '1',
        'periodicity': '1day',
        'time_to_complete': '1 hours',
        'creation_date': 'today',
        'last_completion_date': 'never',
        'parent_thread': 'None',
        'pipelinable': 'No',
        'number_of_dependencies': '0',
        'id': '0',
        'completed': false
    },
];


const name = 'TodoView';

// TODO: Add - sorted by {Sort Method}; to the title
export const InfoSummaryData = [
    {
        title: 'All Tasks - sorted by Priority',
        icon: '',
        iconComponent: '',
        text: 'See All',
        link: 'TodoView',
        tableHeaders: TableHeaderData,
        data: TableContentData,
        component: ({ data, tableHeaders}) => { return <TableContent data={data} tableHeaders={tableHeaders} templates={DefaultRowTemplate} name={name}/> }
    },
];
