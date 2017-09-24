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
const location = {
  latLngs: mockData.businesses.map(business => business.coordinates),
  center: mockData.region.center 
}
const store = createStore(reducer, {bars, location}, enhancers);
export default store;