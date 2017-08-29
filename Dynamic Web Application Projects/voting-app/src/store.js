import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import { loadState, saveState } from './localStorage';
import rootReducer from './reducers/index';
import {users, polls} from './api/mockData';

import freezer from 'redux-freezer';
import thunk from 'redux-thunk';

import auth from './auth/Auth';
import {injectAuthData} from './actions/actions';

//Inject auth data into store from localstorage if there is valid auth data
//(in case of a page reload etc)
let authData = {};
if(auth.isAuthenticated()) {
  authData = {
    expires_at: JSON.parse(localStorage.getItem('expires_at')),
    access_token: localStorage.getItem('access_token'),
    id_token: localStorage.getItem('id_token'),
    profile: JSON.parse(localStorage.getItem('profile'))
  }
}
const defaultState = {users, polls, ui: {votePending: false, voteError: false}, auth: authData};
const enhancers = compose(
  // applyMiddleware(thunk, freezer),
  applyMiddleware(thunk, reduxImmutableStateInvariant()),  
  window.devToolsExtension ? window.devToolsExtension() : f => f
  // applyMiddleware(reduxImmutableStateInvariant())
  // applyMiddleware(freezer)
);

const store = createStore(rootReducer, defaultState, enhancers);
store.subscribe(() => saveState(store.getState()));
// store.dispatch(injectAuthData);
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
