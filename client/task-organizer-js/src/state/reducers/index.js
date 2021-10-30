import { combineReducers } from 'redux';
import TodoViewTableReducer from './TodoViewTableReducer';
import AppReducer from './AppReducer';

const reducers = combineReducers({
    TodoViewTable: TodoViewTableReducer,
    App: AppReducer
});

export default reducers;