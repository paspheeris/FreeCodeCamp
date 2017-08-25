import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router'

const uuidv4 = require('uuid/v4');



const NavBar = ({location}) => {
  // console.log(location);
  // function computedClassName() {

  // }
  return (
    <nav className="navbar">
    <ul>
      <Link to="/" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Home</li></Link>
      <Link to="/polls" ><li className={`navbar-link ${location.pathname === '/polls' ? 'active' : ' '}`}>Polls</li></Link>
      <Link to={`/poll/create/${uuidv4()}`} ><li className="navbar-link">Create Poll</li></Link>
      
    </ul>
    </nav>
  )
}

export default withRouter(NavBar);