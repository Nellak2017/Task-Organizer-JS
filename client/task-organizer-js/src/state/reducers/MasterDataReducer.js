import { masterData } from "../masterData/masterData.js";

const Update_Master_Store_Data = 'App/UpdateMasterStoreData';
const TodoView_AddRow = 'TodoView/AddRow';
const TodoView_UpdateTableData = 'TodoView/UpdateTableData';

// Todo: fix the reducer to actually correct with the new Stores considered

export const reducer = (state = masterData, action) => {
    switch (action.type) {
        case Update_Master_Store_Data:
            return state;
        case TodoView_AddRow:
            return state;
        case TodoView_UpdateTableData:
            return state;
        default:
            return state;
    }
};

export default reducer;