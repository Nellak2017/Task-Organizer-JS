import { MakeDue } from '../../lib/moment/FormatDue.js';
import { TableContent } from "../../components";

// I don't know if this way is optimal, but it is easy
export const TableHeaderData = [
    {
        Header: 'Task',
        accessor: 'task',
    },
    {
        Header: 'Due',
        accessor: 'due',

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
    },
    {
        Header: 'Order',
        accessor: 'order',
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
        'due': [0, 18, 30],
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
        'due': [0, 18, 30],
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
