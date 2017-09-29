import {
  // SEARCH_FORM_SUBMIT,
  SEARCH_FORM_SUBMIT_SUCCESS,
  // SEARCH_FORM_SUBMIT_FAILURE

} from '../constants/actionTypes';

export default (state = {}, action) => {
  // console.log('action at top of searchForm.js reducer:', action);
  switch (action.type) {
    case SEARCH_FORM_SUBMIT_SUCCESS:
      // console.log('SEARCH_FORM_SUBMIT', action.payload);
      return {
        // ...state,
        latLngs: action.payload.businesses.map(business => {
          return ({
            id: business.id,
            name: business.name,
            lat: business.coordinates.latitude,
            lng: business.coordinates.longitude,

          })
        }),
        center: {
          lat: action.payload.region.center.latitude,
          lng: action.payload.region.center.longitude
        }
      };
    default:
      return state;
  }
}