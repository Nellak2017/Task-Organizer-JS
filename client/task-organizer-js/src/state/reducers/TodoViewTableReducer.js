import { TableContentData } from "../../pages/TodoView/Data";

export const reducer = (state = TableContentData , action) => {
    switch (action.type) {
        case "TodoView/AddRow":
            return [...state, action.item];
        default:
            return state;
    }
};

export default reducer;