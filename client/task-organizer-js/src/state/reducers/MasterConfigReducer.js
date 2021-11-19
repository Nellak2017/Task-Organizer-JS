import { masterConfigs } from "../masterData/masterConfigs.js";

const TodoView_Delete_Mode = 'TodoView/DeleteMode';
const TodoView_Current_Page = 'TodoView/CurrentPage';

export const reducer = (state = masterConfigs , action) => {
    switch (action.type) {
		case TodoView_Delete_Mode:
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
		case TodoView_Current_Page:
			const CURRENT_PAGE = action.item;
			return {
				...state,
				Globals: {
					...state.Globals,
					[0]: {
						...state.Globals[0],
						current_page: CURRENT_PAGE
					}
				}
			};
        default:
            return state;
    }
};

export default reducer;