import { masterData } from "../../state/masterData/masterData.js";
import moment from 'moment';

const TodoView_AddRow = 'TodoView/AddRow';
const TodoView_UpdateTableData = 'TodoView/UpdateTableData';
const TodoView_Delete_Mode = 'TodoView/DeleteMode';

// Todo: Make this a bit more customizable by adding the custom templates provided by the user in the local JSON / Store
export const todoViewAddTask = () => {

    // Access the Data to calculate:
    // 	order, id, parent_thread, number_of_dependencies
    // Use current date to calculuate:
    // 	creation_date, due 

    const ID = masterData.length + 1;

    return {
        type: TodoView_AddRow,
        info: 'Create a Default Task for TodoView/Table',
        item: {
            'task': 'Default Task',
            'due': new moment(),
            'priority': 'Low',
            'status': 'Open',
            'weight': '10',
            'order': '0',
            'periodicity': '1day',
            'time_to_complete': '5 hours',
            'creation_date': 'today',
            'last_completion_date': 'yesterday',
            'parent_thread': 'Other',
            'pipelinable': 'No',
            'number_of_dependencies': '0',
            'id': ID.toString(),
            'completed': false
        }
    }
};

// This is the Action Creator for the updating the table data in /TodoView
// I have not tested this to work, but I want to pass in TableData in the 
// form of "mutatedData" (in TableContent.js) as the item.
// This is so that the reducer can then simply update the store with that data.
// Cross my fingers that this works!

export const todoViewUpdateTableData = (TableData) => {
    return {
        type: TodoView_UpdateTableData, 
        info: 'Update the Store with the Table Data in TodoView/Table',
        item: TableData
    }
};


export const todoViewDeleteMode = () => {
    return {
        type: TodoView_Delete_Mode,
        info: 'Toggle Delete Mode for the table component. When active, you will be able to delete rows.' 
    }
};

export default todoViewAddTask;