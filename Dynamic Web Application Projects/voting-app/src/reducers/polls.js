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
      // console.log('VOTE_SUCCESS in polls.js reducer');
      // console.log('in polls reducer:', state.byId[uuid].poll_votes);
      let updateInd = state.byId[uuid].poll_choices.indexOf(action.payload.choice);
      let upArr = [...state.byId[uuid].poll_votes];
      upArr[updateInd] = upArr[updateInd] + 1;
      // let upObj = state.byId[uuid];
      // let corObj = 
      return {
        ...state,
        // [state.byId[action.payload.pollUUID].poll_votes[0]] : (state.byId[action.payload.pollUUID].poll_votes[0] + 1)
        byId : {
          ...state.byId,
          [uuid] : {
            ...state.byId[uuid],
            poll_votes : upArr     
      }
        }
      }
    default:
      return state;
  }
}
export default polls;