import React from 'react';
import FetchDataButton from './FetchDataButton';
import auth from '../auth/Auth';

// const auth = new Auth();

const LandingPage = () => {
  return (
    <div>
      <p>Hey, LandingPage</p>
      <FetchDataButton />
      <button onClick={() => auth.login()} value="clickme">Login</button>
      <button onClick={() => auth.handleAuthentication()} value="clickme">handleAuthentication</button>
      <button onClick={() => auth.logout()} value="clickme">Logout</button>

      <button onClick={() => console.log(auth.isAuthenticated())} value="clickme">isAuthenticated</button>

      
    </div>
  )
}

export default LandingPage;