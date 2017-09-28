import React from 'react';
import auth from '../auth/Auth';
import { Segment, Icon, Divider } from 'semantic-ui-react';

// const auth = new Auth();

const LandingPage = () => {
  return (
    <div className="LandingPage-wrapper">
      <h1 className="pollsDisplay-topText">FreeCodeCamp Polling App</h1>
      <Divider horizontal />
      <div className="LandingPage-lowerSegment">
        <div className="LandingPage-Segment">
          <ul>
            <li>Create and share polls with your friends</li>
            <li>Create and share polls with your friends</li>
            <li>Create and share polls with your friends</li>
            <li>Create and share polls with your friends</li>
            <li>Create and share polls with your friends</li>
            <li>Create and share polls with your friends</li>
            <li>Create and share polls with your friends</li>

          </ul>
        </div >
        <img className="ballotBox-image" src='ballotBox.svg' alt="<div>Icons made by <a href='http://www.freepik.com' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a> is licensed by <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0 BY</a></div>'" />
        {/* <Divider vertical /> */}
      </div>

    </div>
  )
}

export default LandingPage;