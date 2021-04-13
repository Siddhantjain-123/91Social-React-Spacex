import { combineReducers } from 'redux';
import user from './user';
import missions from './missions';
import launches from './launches';
import rockets from './rockets';

const rootReducer = combineReducers({
    user,
    missions,
    launches,
    rockets
});

export default rootReducer;