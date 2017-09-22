import {
  SEARCH_FORM_SUBMIT,
  SEARCH_FORM_SUBMIT_SUCCESS,
  SEARCH_FORM_SUBMIT_FAILURE

} from '../constants/actionTypes';

export default (state = {}, action) => {
  // console.log('action at top of searchForm.js reducer:', action);
  switch (action.type) {
    case SEARCH_FORM_SUBMIT_SUCCESS:
      // console.log('SEARCH_FORM_SUBMIT', action.payload);
      return {
        // ...state,
        locations: action.payload.businesses.map(business => business.coordinates),
        region: action.payload.region.center
      };
    default:
      return state;
  }
}