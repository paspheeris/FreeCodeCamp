import update from 'immutability-helper';

import { FETCH_DATA, VOTE, CREATE_POLL } from '../actions/actions';


function polls(state = {}, action) {
      // console.log(state);
      // console.log(action);
  switch(action.type) {
    case FETCH_DATA:
      if(action.payload && !action.payload.error) {
        return {
          ...state,
          byId: action.payload.polls.byId,
          allIds: action.payload.polls.allIds
        };
      }
      break;
    case VOTE:
      if(!action.payload) return state;
      if(action.payload.error) return state;
      const uuid = action.payload.uuid;
      let updateInd = state.byId[uuid].poll_choices.indexOf(action.payload.choice);
      console.log(action);
      return update(state, {byId: {[uuid]: {poll_votes: {[updateInd]: {$apply: x => x + 1}}}}});
      // let upArr = [...state.byId[uuid].poll_votes];
      // upArr[updateInd] = upArr[updateInd] + 1;
      // return {
      //   ...state,
      //   // [state.byId[action.payload.pollUUID].poll_votes[0]] : (state.byId[action.payload.pollUUID].poll_votes[0] + 1)
      //   byId : {
      //     ...state.byId,
      //     [uuid] : {
      //       ...state.byId[uuid],
      //       poll_votes : upArr     
      //     }
      //   }
      // }
    case CREATE_POLL:
      if(!action.payload) return state;
      if(action.payload.error) return state;
      console.log(action);
      return update(state, {
        byId: {$merge: {[action.payload.poll.key]: action.payload.poll}},
        allIds: {$pushIfAbsent: action.payload.poll.key}
      });
    default:
      return state;
  }
}
export default polls;

update.extend('$pushIfAbsent', function(newItem, original) {
  return original.includes(newItem) ? original : original.concat(newItem);
});