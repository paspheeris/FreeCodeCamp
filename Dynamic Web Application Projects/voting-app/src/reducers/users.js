import { POLL_VOTE, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actions';

function users(state = {}, action) {
  switch(action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        byId: action.payload.data.users.byId,
        allIds: action.payload.data.users.allIds
      };
    default:
      return state;
  }
}
export default users;