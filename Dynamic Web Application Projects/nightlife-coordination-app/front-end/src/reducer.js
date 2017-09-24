import { combineReducers } from 'redux';
import searchForm from './reducers/searchForm';
import bars from './reducers/bars';
import location from './reducers/locations';

export default combineReducers({bars, location, searchForm});