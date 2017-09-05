import update from 'immutability-helper';

import { FETCH_DATA, VOTE, CREATE_POLL } from '../actions/actions';


function polls(state = {}, action) {
      // console.log(state);
      // console.log(action);
  switch(action.type) {
    case FETCH_DATA:
      // console.log(action);
      if(action.payload && !action.payload.error) {
        return {
          ...state,
          // byId: action.payload.responseData.map(obj => {
          //   return {[obj._id]: obj};
          byId: action.payload.responseData.reduce((accum, obj) => {
            accum[obj._id] = obj;
            return accum;
          }, {}),
          allIds: action.payload.responseData.map(obj => obj._id)
        };
      } else return state;
      // if(action.payload && !action.payload.error) {
      //   return {
      //     ...state,
      //     byId: action.payload.polls.byId,
      //     allIds: action.payload.polls.allIds
      //   };
      // } else return state;
    case VOTE:
      if(!action.payload) return state;
      if(action.payload.error) return state;
      const {uuid, choice} = action.payload;
      console.log(action);
      return update(state, {byId: {[uuid]: {$set: action.payload.responseData}}})

      // if(state.byId[uuid].allChoices.includes(choice)) {
      //   console.log('in if');
      //   return update(state, {byId: {[uuid]: {votesByChoice: {[choice]: {$apply: x => x + 1}}}}});
      // } else {
      //   console.log('in else');
      //   return update(state, {byId: {[uuid]: {
      //                                   votesByChoice: {$merge: {[choice]: 1}},
      //                                   allChoices: {$push: [choice]}}}});
      // }




      // let updateInd = state.byId[uuid].allChoices.indexOf(action.payload.choice);
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
        byId: {$merge: {[action.payload.responseData._id]: action.payload.responseData._id}},
        allIds: {$pushIfAbsent: action.payload.responseData._id}
      });
    default:
      return state;
  }
}
export default polls;

update.extend('$pushIfAbsent', function(newItem, original) {
  return original.includes(newItem) ? original : original.concat(newItem);
});