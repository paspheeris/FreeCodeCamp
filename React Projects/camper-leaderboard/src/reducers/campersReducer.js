import * as types from '../actions/actionTypes';

export default function camperReducer(state=[], action) {
  switch(action.type) {
    case types.LOAD_CAMPERS_SUCCESS:
      return action.campers;

    default:
      return state;
  }
}