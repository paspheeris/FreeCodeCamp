import { polls, users } from './mockData';

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
      setTimeout(() => {
        res({status: "SUCCESS"});
      }, DELAY);
    });
  }
}