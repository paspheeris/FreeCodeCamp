import { polls, users } from './mockData';
import auth from '../auth/Auth';

const DELAY = 500;


export default class mockApi {
  static fetchAll() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({status: "SUCCESS",
             apiData: {users, polls}});
      }, DELAY);
    }); 
  }
  static submitVote() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({status: "SUCCESS"});
      }, DELAY);
      // setTimeout(() => {
      //   rej("FAILURE");
      // }, DELAY);
    });
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