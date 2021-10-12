import { combineReducers } from 'redux';
import TodoViewTableReducer from './TodoViewTableReducer';

const reducers = combineReducers({
    TodoViewTable: TodoViewTableReducer
});

export default reducers;