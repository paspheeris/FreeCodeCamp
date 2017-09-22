import { combineReducers } from 'redux';
import searchForm from './reducers/searchForm';
import bars from './reducers/bars';
import locations from './reducers/locations';

export default combineReducers({bars, locations, searchForm});