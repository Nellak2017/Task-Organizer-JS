import { masterData } from "../masterData/masterData.js";

const Update_Master_Store_Data = 'App/UpdateMasterStoreData';

export const reducer = (state = masterData , action) => {
    switch (action.type) {
        case Update_Master_Store_Data:
            return [action.item];
        default:
            return state;
    }
};

export default reducer;