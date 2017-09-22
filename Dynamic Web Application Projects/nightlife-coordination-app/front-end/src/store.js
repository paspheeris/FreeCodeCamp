import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {promiseMiddleware} from './middleware';
import mockData from './mockData'
const enhancers = compose(
  applyMiddleware(thunk, promiseMiddleware),  
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const bars = mockData.businesses;
const store = createStore(reducer, {bars}, enhancers);
export default store;