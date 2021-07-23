import { MakeDue } from '../../lib/moment/FormatDue.js';
import { TableContent } from "../../components";

// I don't know if this way is optimal, but it is easy
export const TableHeaderData = [
    {
        td: 'Task'
    },
    {
        td: 'Due'
    },
    {
        td: 'Priority'
    },
    {
        td: 'Status'
    },
    {
        td: 'Weight'
    },
    {
        td: 'Order'
    },
    {
        td: 'Periodicity'
    },
    {
        td: 'Time To Complete'
    },
    {
        td: 'Creation Date'
    },
    {
        td: 'Last Completion Date'
    },
    {
        td: 'Parent Thread'
    },
    {
        td: 'Pipelinable'
    },
    {
        td: 'Number of Dependencies'
    },
];

// This is dummy Table Content data that is supposed to be fetched
// TODO: have a date / time format used in the data source
// TODO: have standard method for dealing with periodicity
// TODO: Add Data validation for this so that you can pass in CamelCase Attributes instead of this ugly mess
export const TableContentData = [

    {
        task: 'Github (20 contribs)',
        due: MakeDue(0, 18, 30),
        priority: 'High',
        status: 'Processing',
        weight: '100', 
        order: '1', 
        periodicity: '1 * day',
        'time to complete': '5 hours',
        'creation date': 'today',
        'last completion date': 'yesterday',
        'parent thread': 'Experience',
        pipelinable: 'No',
        'number of dependencies': '0',
        id: '0',
        completed: false
    },
    {
        task: 'Relax',
        due: MakeDue(0, 6, 30),
        priority: 'Low',
        status: 'Open',
        weight: '50', 
        order: '2', 
        periodicity: '1 * day',
        'time to complete': '2 hours',
        'creation date': 'today',
        'last completion date': 'never',
        'parent thread': 'Domestic',
        pipelinable: 'No',
        'number of dependencies': '1',
        id: '1',
        completed: false
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
