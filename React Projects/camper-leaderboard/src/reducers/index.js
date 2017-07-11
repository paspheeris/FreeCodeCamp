//Root reducer

import {combineReducers} from 'redux';
import campers from './campersReducer.js';

const rootReducer = combineReducers({
  campers
});

export default rootReducer