import { combineReducers } from 'redux';

import polls from './polls';
import users from './users';

const rootReducer = combineReducers({users, polls});

export default rootReducer;