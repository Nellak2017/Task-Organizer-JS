import { masterData } from "../../state/masterData/masterData.js";

const Update_Master_Store_Data = 'App/UpdateMasterStoreData';

// This is the Action Creator for the updating the Master Data in the Redux Store
export const UpdateMasterStoreData = () => {
    return {
        type: Update_Master_Store_Data, 
        info: 'Update the Store with the current Master JSON Data.',
        item: masterData
    }
};

export default UpdateMasterStoreData;