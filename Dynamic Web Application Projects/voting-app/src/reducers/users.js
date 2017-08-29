import { POLL_VOTE, FETCH_DATA } from '../actions/actions';

function users(state = {}, action) {
  switch(action.type) {
    case FETCH_DATA:
      if(action.payload && !action.payload.error) {
      // console.log('action in users reducers:', action);
        return {
          ...state,
          byId: action.payload.users.byId,
          allIds: action.payload.users.allIds
        };
      }
      break;
    default:
      return state;
  }
}
export default users;