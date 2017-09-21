import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {promiseMiddleware} from './middleware.js';
const store = createStore(reducer, applyMiddleware(thunk, promiseMiddleware));
export default store;
