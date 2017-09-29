import {
  // SEARCH_FORM_SUBMIT,
  // SEARCH_FORM_SUBMIT_SUCCESS,
  // SEARCH_FORM_SUBMIT_FAILURE
  CARD_MOUSE_ENTER,
  CARD_MOUSE_EXIT

} from '../constants/actionTypes';

export default (state = {}, action) => {
  console.log('action at top of ui reducer:', action)
  switch (action.type) {
    case CARD_MOUSE_ENTER:
      return {
        ...state,
        hoverMarker: { lat: action.payload.latitude, lng: action.payload.longitude }
      }
    case CARD_MOUSE_EXIT:
      return {
        ...state,
        hoverMarker: false
      }
    default:
      return state;
  }
}