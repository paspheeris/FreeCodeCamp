import { POLL_VOTE } from '../actions/actions';

function polls(state = [], action) {
      // console.log(state);
  switch(action.type) {
    case POLL_VOTE:
      return [
        ...state,
        'hurrrrr'
      ];
    default:
      return state;
  }
}
export default polls;