import { combineReducers } from 'redux';

import polls from './polls';
import users from './users';
import ui from './ui';

const rootReducer = combineReducers({users, polls, ui});

export default rootReducer;