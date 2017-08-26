import mockApi from '../api/mockApi';


export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const VOTE_PENDING = 'VOTE_PENDING';
export const VOTE_SUCCESS = 'VOTE_SUCCESS';
export const VOTE_FAILURE = 'VOTE_FAILURE';



export function voteSuccess(pollUUID, choice) {
  return {
    type: VOTE_SUCCESS,
    payload: { pollUUID, choice } 
  }
}
export function votePending() {
  return { 
    type: VOTE_PENDING
  }
}
export function voteFailure(error) {
  return {
    type: VOTE_FAILURE,
    payload: {error}
  }
}
export function submitVote(pollUUID, choice) {
  return dispatch => {
    return mockApi.submitVote(pollUUID, choice)
      .then(response => {
        if(response === "LOGGED_IN") {
          console.log("dispatching voteSuccess");
          dispatch(voteSuccess(pollUUID, choice));
        }
      })
      .catch(error => {
        console.error(error);
        dispatch(voteFailure(error));
      });
  }
}

function thunkCreate(api, apiMethod, typePrefix) {
  return (payload) => {
    return dispatch => {
      return apiMethod.apply(api, payload)
        .then(res => {
          if (res === 'SUCCESS') {
            console.log('dispatching poll create success');
            dispatch({
              type: `${typePrefix}_SUCCESS`,
              payload
            });
          }
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type: `${typePrefix}_FAILURE`,
            payload: {error}
          });
        })
    }
  }
}

export const createPoll = thunkCreate(mockApi, mockApi.createPoll, 'CREATE_POLL');

export function fetchDataPending() {
  return {type: FETCH_DATA_PENDING}
}
export function fetchDataSuccess(data) {
  return {type: FETCH_DATA_SUCCESS, payload: {data}}
}
export function fetchDataFailure(error) {
  return {type: FETCH_DATA_FAILURE, payload: {error}}
}

//thunk
export function fetchData() {
  console.log("starting fetchData thunk");
  return dispatch => {
    return mockApi.fetchAll()
      .then(data => {
        console.log("dispatching fetchDataSuccess");
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  }
}

