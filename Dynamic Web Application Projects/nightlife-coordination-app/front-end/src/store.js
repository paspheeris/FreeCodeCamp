import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {promiseMiddleware} from './middleware.js';
const enhancers = compose(
  applyMiddleware(thunk, promiseMiddleware),  
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(reducer, {}, enhancers);
export default store;