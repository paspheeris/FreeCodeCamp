import update from 'immutability-helper';

import { FETCH_DATA, VOTE, CREATE_POLL, EDIT_POLL } from '../actions/actions';


function polls(state = {}, action) {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      // console.log(action);
      if (action.payload && !action.payload.error) {
        return {
          ...state,
          byId: action.payload.responseData.reduce((accum, obj) => {
            accum[obj._id] = obj;
            return accum;
          }, {}),
          allIds: action.payload.responseData.map(obj => obj._id)
        };
      } else return state;

    case VOTE:
      if (!action.payload) return state;
      if (action.payload.error) return state;
      const { uuid } = action.payload;
      console.log(action);
      return update(state, { byId: { [uuid]: { $set: action.payload.responseData } } })


    case CREATE_POLL:
      if (!action.payload) return state;
      if (action.payload.error) return state;
      console.log(action);
      return update(state, {
        byId: { $merge: { [action.payload.responseData._id]: action.payload.responseData } },
        allIds: { $pushIfAbsent: action.payload.responseData._id }
      });
    case EDIT_POLL:
      if (!action.payload) return state;
      if (action.payload.error) return state;
      return update(state, {
        byId: { $merge: { [action.payload.responseData._id]: action.payload.responseData } },
      });
    default:
      return state;
  }
}
export default polls;

update.extend('$pushIfAbsent', function (newItem, original) {
  return original.includes(newItem) ? original : original.concat(newItem);
});