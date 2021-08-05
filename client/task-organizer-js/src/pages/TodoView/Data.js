import { TableContent } from "../../components";
import React from 'react';
import MomentUtils from '@date-io/moment';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import FormatDue from '../../lib/moment/FormatDue.js';
import moment from 'moment';
import {StyledDateTimePicker} from '../../components/Editable/Editable.elements.js';
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
            const [selectedDate, handleDateChange] = React.useState(new moment(initialValue));
      
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
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: 'Weight',
        accessor: 'weight',
        Cell:({
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
    
            // If the initialValue is changed external, sync it up with our state
            React.useEffect(() => { setValue(initialValue) }, [initialValue])
    
            return <StyledEditableCell type={"number"} value={value} onChange={onChange} onBlur={onBlur} />
        }
    },
    {
        Header: 'Order',
        accessor: 'order',
        Cell:({row: { index }}) => {      
            return (
                <span>{index+1}</span>
            )
        }
    },
    {
        Header: 'Periodicity',
        accessor: 'periodicity',
    },
    {
        Header: 'Time To Complete',
        accessor: 'time_to_complete',
    },
    {
        Header: 'Creation Date',
        accessor: 'creation_date',
    },
    {
        Header: 'Last Completion Date',
        accessor: 'last_completion_date',
    },
    {
        Header: 'Parent Thread',
        accessor: 'parent_thread',
    },
    {
        Header: 'Pipelinable',
        accessor: 'pipelinable',
    },
    {
        Header: 'Number of Dependencies',
        accessor: 'number_of_dependencies',
    },
];

// This is dummy Table Content data that is supposed to be fetched
// TODO: have a date / time format used in the data source
// TODO: have standard method for dealing with periodicity
// TODO: Add Data validation for this so that you can pass in CamelCase Attributes instead of this ugly mess
// TODO: Use ISO Standards for your Data
export const TableContentData = [

    {
        'task': 'Github (20 contribs)',
        'due': new moment('16:30, 8Aug2021','HH:mm, DMMMYYYY'),
        'priority': 'High',
        'status': 'Processing',
        'weight': '100',
        'order': '1',
        'periodicity': '1 * day',
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
        'due': new moment('10:30, 9Aug2021','HH:mm, DMMMYYYY'),
        'priority': 'Low',
        'status': 'Open',
        'weight': '50',
        'order': '2',
        'periodicity': '1 * day',
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
        component: ({ data, tableHeaders }) => { return <TableContent data={data} tableHeaders={tableHeaders} /> }
    },
];
