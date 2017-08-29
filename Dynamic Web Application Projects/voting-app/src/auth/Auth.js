import auth0 from 'auth0-js';

class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  auth0 = new auth0.WebAuth({
    domain: 'paspheeris.auth0.com',
    clientID: 'v_yjKK_mmfZYpiRW28xu6rxVz99lGTH9',
    redirectUri: 'http://localhost:3000/profile',
    audience: 'https://paspheeris.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
  handleAuthentication(hash, res, rej) {
    this.auth0.parseHash({hash}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expires_at = this.setSession(authResult);
        // history.replace('/home');
        // console.log(authResult);
        // console.log(expires_at);
        let obj = {
          expires_at,
          access_token: authResult.accessToken,
          id_token: authResult.idToken
        };
        // console.log('obj', obj);
        res(obj);
      } else if (err) {
        // history.replace('/home');
        console.log(err);
        rej(err);
      }
    });
  }
  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    // history.replace('/home');

    return expiresAt;
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    // history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
export default new Auth();