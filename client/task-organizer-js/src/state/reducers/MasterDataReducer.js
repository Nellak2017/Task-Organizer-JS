import { masterData } from "../masterData/masterData.js";

const TodoView_AddRow = 'TodoView/AddRow';
const TodoView_UpdateTableData = 'TodoView/UpdateTableData';

export const reducer = (state = masterData, action) => {
    switch (action.type) {
        case TodoView_AddRow:
            console.log("Made it to TodoView_AddRow")
            console.log(action.item)
            return [...state, action.item];
        case TodoView_UpdateTableData:
            console.log("Made it to TodoView_UpdateTableData")
            console.log(action.item)
            return [...action.item];
        default:
            return state;
    }
};

export default reducer;