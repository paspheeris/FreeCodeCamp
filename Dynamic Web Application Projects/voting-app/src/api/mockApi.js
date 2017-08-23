import { polls, users } from './mockData';

const DELAY = 500;


export default class mockApi {
  static fetchAll() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({users, polls});
      }, DELAY);
    }); 
  }
  static submitVote() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("LOGGED_IN");
      }, DELAY);
    });
}
}