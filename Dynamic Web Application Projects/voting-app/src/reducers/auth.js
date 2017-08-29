import { INJECT_AUTH_DATA, DROP_AUTH_DATA, INJECT_PROFILE } from '../actions/actions';
import update from 'immutability-helper';

function auth(state = {}, action) {
  console.log('state in auth reducer', action);
  switch(action.type){
  case INJECT_AUTH_DATA:
    const {access_token, expires_at, id_token} = action.payload;
    return {...state, access_token, expires_at, id_token};
  case DROP_AUTH_DATA:
    return {};
  case INJECT_PROFILE:
    return {...state, profile: action.payload}
  default:
    return state;
  }
}
export default auth;