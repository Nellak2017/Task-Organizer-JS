import { TableContentData } from "../../pages/TodoView/Data";

const TodoView_AddRow = 'TodoView/AddRow';
const TodoView_UpdateTableData = 'TodoView/UpdateTableData';

export const reducer = (state = TableContentData , action) => {
    switch (action.type) {
        case TodoView_AddRow:
            return [...state, action.item];
        case TodoView_UpdateTableData:
            return [...action.item];
        default:
            return state;
    }
};

export default reducer;