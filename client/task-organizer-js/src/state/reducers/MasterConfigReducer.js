import { masterConfigs } from "../masterData/masterConfigs.js";

const TodoView_Delete_Mode = 'TodoView/DeleteMode';

export const reducer = (state = masterConfigs , action) => {
    switch (action.type) {
		case TodoView_Delete_Mode:
			console.log("made it to TodoView_Delete_Mode");
			const DELETE_FLAG_STATUS = state.Globals[0].delete_mode === false ? true : false ;
			return {
				...state,
				Globals: {
					...state.Globals,
					[0]: {
						...state.Globals[0],
						delete_mode: DELETE_FLAG_STATUS
					}
				}
			};
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