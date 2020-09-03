import {combineReducers} from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    //name: nameReducer
    auth: authReducer
})

export default rootReducer;