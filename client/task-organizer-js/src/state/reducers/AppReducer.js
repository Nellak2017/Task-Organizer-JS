import { masterData } from "../../state/masterData/masterData.js";

// Important note: this is not exclusive to App, but can be called anywhere in App
// Ideally it will be called on link change or at certain timed intervals 

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