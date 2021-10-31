import { TableContentData } from "../../pages/TodoView/Data";
import { masterConfigs } from "../masterData/masterConfigs.js";

export const reducer = (state = masterConfigs , action) => {
    switch (action.type) {
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