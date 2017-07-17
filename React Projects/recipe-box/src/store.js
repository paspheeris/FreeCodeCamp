import { createStore, compose, applyMiddleware } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { BrowserRouter } from 'react-router-dom';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


//import the root reducer
import rootReducer from './reducers/index';

import recipes from './data/defaultRecipes';

//create an object for the default data
const defaultState = {
  recipes
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(reduxImmutableStateInvariant())
);

const store = createStore(rootReducer, defaultState, enhancers);

// export const history = syncHistoryWithStore(BrowserRouter, store);

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;