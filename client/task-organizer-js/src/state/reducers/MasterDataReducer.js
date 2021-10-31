import { masterData } from "../masterData/masterData.js";

const TodoView_AddRow = 'TodoView/AddRow';
const TodoView_UpdateTableData = 'TodoView/UpdateTableData';

// Todo: fix the reducer to actually correct with the new Stores considered

export const reducer = (state = masterData, action) => {
    switch (action.type) {
        case TodoView_AddRow:
            return [...state, action.item];
        case TodoView_UpdateTableData:
            return state;
        default:
            return state;
    }
};

export default reducer;