import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, VOTE_SUCCESS } from '../actions/actions';


function polls(state = {}, action) {
      // console.log(state);
      console.log(action);
  switch(action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        byId: action.payload.data.polls.byId,
        allIds: action.payload.data.polls.allIds
      };
    case VOTE_SUCCESS:
      const uuid = action.payload.pollUUID;
      console.log('VOTE_SUCCESS in polls.js reducer');
      console.log(state.byId[uuid].poll_votes);
      return {
        ...state,
        // [state.byId[action.payload.pollUUID].poll_votes[0]] : (state.byId[action.payload.pollUUID].poll_votes[0] + 1)
        byId : {
          ...state.byId,
          uuid : {
            ...uuid,
            [state.byId[uuid].poll_votes] : [...state.byId[uuid].poll_votes][0]++     
      }
        }
      }
    default:
      return state;
  }
}
export default polls;