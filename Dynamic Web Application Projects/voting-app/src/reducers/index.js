import { combineReducers } from 'redux';

import polls from './polls';
import users from './users';

const rootReducer = combineReducers({polls, users});

export default rootReducer;