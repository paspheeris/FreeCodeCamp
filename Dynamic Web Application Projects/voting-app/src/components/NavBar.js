import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router'
import auth from '../auth/Auth';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { dropAuthData } from '../actions/actions';

const uuidv4 = require('uuid/v4');



const NavBar = ({location, actions, expires_at}) => {
function loginOrLogout() {
    return expires_at > Date.now() ?
    <div onClick={actions.dropAuthData}><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Logout</li></div> :    
    <div onClick={auth.login}><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Login</li></div>;
  }
  // console.log(location);
  // function computedClassName() {

  // }
  return (
    <nav className="navbar">
    <ul>
      <Link to="/" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Home</li></Link>
      <Link to="/polls" ><li className={`navbar-link ${location.pathname === '/polls' ? 'active' : ' '}`}>Polls</li></Link>
      <Link to={`/poll/create/${uuidv4()}`} ><li className="navbar-link">Create Poll</li></Link>
      <Link to="/profile" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Profile</li></Link>      
      {loginOrLogout()}
    </ul>
    </nav>
  )
}
function mapStateToProps(state,ownProps) {
  return {
    expires_at: state.auth.expires_at
  }
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({dropAuthData}, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));