import { combineReducers } from 'redux';
import searchForm from './reducers/searchForm';
import bars from './reducers/bars';

export default combineReducers({bars, searchForm});