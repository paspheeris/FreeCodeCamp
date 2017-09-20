import {
  SEARCH_BOX_KEY_PRESS
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_BOX_KEY_PRESS:
      return state;
    default:
      return state;
  }
}