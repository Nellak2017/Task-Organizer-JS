import { masterData } from "../masterData/masterData.js";

const TodoView_AddRow = 'TodoView/AddRow';
const TodoView_UpdateTableData = 'TodoView/UpdateTableData';
const TodoView_Delete_Task = 'TodoView/DeleteTask'; // possibly use task information to return a slice not including that task in the master data

export const reducer = (state = masterData, action) => {
    switch (action.type) {
        case TodoView_AddRow:
            return [...state, action.item];
        case TodoView_UpdateTableData:
            return [...action.item];
        case TodoView_Delete_Task:
            return state;
        default:
            return state;
    }
};

export default reducer;