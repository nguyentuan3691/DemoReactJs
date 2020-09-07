import {combineReducers} from 'redux';
import authReducer from './authReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    status: statusReducer
})

export default rootReducer;