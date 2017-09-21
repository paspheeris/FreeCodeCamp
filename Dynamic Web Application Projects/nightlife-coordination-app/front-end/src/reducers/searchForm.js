import {
  SEARCH_FORM_SUBMIT
} from '../constants/actionTypes';

export default (state = {}, action) => {
  console.log('action at top of searchForm.js reducer:', action);
  switch (action.type) {
    case SEARCH_FORM_SUBMIT:
      // console.log('SEARCH_FORM_SUBMIT', action.payload);
      return state;
    default:
      return state;
  }
}