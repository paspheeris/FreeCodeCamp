import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import { loadState, saveState } from './localStorage';
import rootReducer from './reducers/index';
import {users, polls} from './api/mockData';

import freezer from 'redux-freezer';
import thunk from 'redux-thunk';

// if(! loadState()) {
//   saveState({users, polls});
// }

// const defaultState = loadState() ? 
//   {users: loadState().users, polls: loadState().polls} :
//   {users, polls};


const defaultState = {users, polls, ui: {votePending: false, voteError: false}};
const enhancers = compose(
  // applyMiddleware(thunk, freezer),
  applyMiddleware(thunk, reduxImmutableStateInvariant()),  
  window.devToolsExtension ? window.devToolsExtension() : f => f
  // applyMiddleware(reduxImmutableStateInvariant())
  // applyMiddleware(freezer)
);

const store = createStore(rootReducer, defaultState, enhancers);
store.subscribe(() => saveState(store.getState()));

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
