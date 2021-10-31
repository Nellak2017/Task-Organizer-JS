import { TableContentData } from "../../pages/TodoView/Data";
import { masterConfigs } from "../masterData/masterConfigs.js";

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

/*
// MasterConfig reducer

import { masterConfig } from "../../state/masterConfig/masterConfig.js"

// Variables that have the names of each Action type

export const reducer = (state = masterConfig, action) => {
	switch (action.type) {
		case // First action:
			return // Action's update to the configs
		... // For any Config update, submit action here
	}
}
*/