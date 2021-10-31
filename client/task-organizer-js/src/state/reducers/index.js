import { combineReducers } from 'redux';
import MasterConfigReducer from './MasterConfigReducer';
import MasterDataReducer from './MasterDataReducer';

const reducers = combineReducers({
    MasterData: MasterDataReducer,
    MasterConfigs: MasterConfigReducer
});

export default reducers;