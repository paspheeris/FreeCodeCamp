import { polls, users } from './mockData';
import auth from '../auth/Auth';
import update from 'immutability-helper';

const DELAY = 500;


export default class mockApi {
  constructor() {
    this.endpoint = 'http://localhost:7777/';

    this.submitVote = this.submitVote.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
    this.createPoll = this.createPoll.bind(this);
  }
  fetchAll(payload, endpoint=this.endpoint) {
      endpoint = endpoint+ `polls`;
      return fetch(endpoint);
    }
  
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
  } 
  createPoll(payload, endpoint=this.endpoint) {
    endpoint = endpoint + `poll/create`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Allow: ['GET', 'POST','HEAD', 'OPTIONS','PUT', 'PATCH']
      },
      body: JSON.stringify(payload)
    });
  }
}