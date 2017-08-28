import mockApi from '../api/mockApi';

export const VOTE = 'VOTE';
export const FETCH_DATA = 'FETCH_DATA';
export const CREATE_POLL = 'CREATE_POLL';
export const INJECT_AUTH_DATA = 'INJECT_AUTH_DATA';
export const DROP_AUTH_DATA = 'DROP_AUTH_DATA';

export const submitVote = thunkCreate(mockApi, mockApi.submitVote, VOTE);
export const createPoll = thunkCreate(mockApi, mockApi.createPoll, CREATE_POLL);
export const fetchData = thunkCreate(mockApi, mockApi.fetchAll, FETCH_DATA);

export function injectAuthData(payload) {
  return {
    type: INJECT_AUTH_DATA,
    payload,
  }
}
export function dropAuthData() {
  return {
    type: DROP_AUTH_DATA
  }
}

function thunkCreate(api, apiMethod, type) {
  return (payload={}) => {
      // console.log(payload.nativeEvent);

      //If one of the exported thunks is called inline in a react component
      //(rather than explicitly provided with a payload), it will pass in a 
      //synthetic event. Here we check to see if payload is a synthetic event,
      //and if so we instead set it to an empty object
      if(payload.nativeEvent) {
        payload = {};
      }
    return (dispatch, getState) => {
      console.log('getstate in thunkcreator', getState());
      const {auth} = getState();
      if(auth) {
        payload = {...payload, auth};
      }
      console.log(`dispatching initial ${type}`);
      dispatch({type});
      return apiMethod.apply(api, payload)
        .then(res => {
          // console.log('res:', res);
          if (res.status === 'SUCCESS') {
            console.log(`dispatching ${type} success`);
            if(res.apiData) {
              //Data received from the api; merge it with the payload data 
              //from when the action initiated
              payload = {...payload, ...res.apiData};
            }
            dispatch({
              type,
              payload
            });
          }
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type,
            payload: {error}
          });
        })
    }
  }
}
// export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// export const VOTE_PENDING = 'VOTE_PENDING';
// export const VOTE_SUCCESS = 'VOTE_SUCCESS';
// export const VOTE_FAILURE = 'VOTE_FAILURE';



// export function voteSuccess(pollUUID, choice) {
//   return {
//     type: VOTE_SUCCESS,
//     payload: { pollUUID, choice } 
//   }
// }
// export function votePending() {
//   return { 
//     type: VOTE_PENDING
//   }
// }
// export function voteFailure(error) {
//   return {
//     type: VOTE_FAILURE,
//     payload: {error}
//   }
// }
// export function submitVote(pollUUID, choice) {
//   return dispatch => {
//     return mockApi.submitVote(pollUUID, choice)
//       .then(response => {
//         if(response === "LOGGED_IN") {
//           console.log("dispatching voteSuccess");
//           dispatch(voteSuccess(pollUUID, choice));
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         dispatch(voteFailure(error));
//       });
//   }
// }

// console.log(submitVote);




// export function fetchDataPending() {
//   return {type: FETCH_DATA_PENDING}
// }
// export function fetchDataSuccess(data) {
//   return {type: FETCH_DATA_SUCCESS, payload: {data}}
// }
// export function fetchDataFailure(error) {
//   return {type: FETCH_DATA_FAILURE, payload: {error}}
// }


//thunk
// export function fetchData() {
//   console.log("starting fetchData thunk");
//   return dispatch => {
//     return mockApi.fetchAll()
//       .then(data => {
//         console.log("dispatching fetchDataSuccess");
//         dispatch(fetchDataSuccess(data));
//       })
//       .catch(error => {
//         dispatch(fetchDataFailure(error));
//       });
//   }
// }

