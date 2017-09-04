import { polls, users } from './mockData';
import auth from '../auth/Auth';
import update from 'immutability-helper';

const DELAY = 500;


export default class mockApi {
  constructor() {
    this.endpoint = 'http://localhost:7777/';

    this.submitVote = this.submitVote.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
  }
  fetchAll(payload, endpoint=this.endpoint) {
      endpoint = endpoint+ `polls`;
      return fetch(endpoint);
    }
    // return new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res({status: "SUCCESS",
    //          apiData: {users, polls}});
    //   }, DELAY);
    // }); 
  
  submitVote(payload, endpoint=this.endpoint) {
    endpoint = endpoint + `poll/vote/${payload.uuid}`;
    return fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Allow: ['GET', 'POST','HEAD', 'OPTIONS','PUT', 'PATCH']
      },
      body: JSON.stringify(payload)
    });

    // console.log('this in mockApi.submitVote', this);
    // return new Promise((res, rej) => {
    //   setTimeout(() => {
    //     const {uuid, choice} = payload;
    //     if(polls.byId[uuid].allChoices.includes(choice)) {
    //     // console.log('in if');
    //     polls = update(polls, {byId: {[uuid]: {votesByChoice: {[choice]: {$apply: x => x + 1}}}}});
    //   } else {
    //     // console.log('in else');
    //     polls = update(polls, {byId: {[uuid]: {
    //                                     votesByChoice: {$merge: {[choice]: 1}},
    //                                     allChoices: {$push: [choice]}}}});
    //   }
    //     this.polls = polls;
    //     res(polls.byId[uuid]);
    //   }, DELAY);
      // setTimeout(() => {
      //   rej("FAILURE");
      // }, DELAY);
    // });
  } 
  static createPoll() {
    return new Promise((res, rej) => {
    // if(!auth.isAuthenticated()) rej("You must be logged in to create a poll");    
      setTimeout(() => {
        res({status: "SUCCESS"});
      }, DELAY);
    });
  }
}