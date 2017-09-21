import store from './store';

const YELP_API_ROOT = 'https://yelp.com';

const responseBody = (response) => {
  return response.toJSON()
    .then(json => {
      store.dispatch({type: 'fetch success', payload: json})
    })
    .catch(error => {
      // console.log('async actions', 'json parse error?');
    })
}
const errorHandler = (error) => {
  // console.log('errorHandler catch function in asyncActions:', error);
  store.dispatch({type: 'dunno, catch error in asyncactions.js', payload: error});
}

const requests = {
  // del: url =>
  //   superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    fetch(`${YELP_API_ROOT}${url}`)
    // const promiseMiddleware = store => next => action => {
  // put: (url, body) =>
  //   superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  // post: (url, body) =>
  //   superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Yelp = {
  getBars: (searchTerm) =>
    requests.get('/user'),
  // login: (email, password) =>
  //   requests.post('/users/login', { user: { email, password } }),
  // register: (username, email, password) =>
  //   requests.post('/users', { user: { username, email, password } }),
  // save: user =>
  //   requests.put('/user', { user })
};

export default {
  Yelp
}