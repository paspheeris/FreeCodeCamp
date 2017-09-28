import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router'
import auth from '../auth/Auth';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { dropAuthData } from '../actions/actions';
import {Menu} from 'semantic-ui-react';

const uuidv4 = require('uuid/v4');



const NavBar = ({location, actions, expires_at}) => {
function isLoggedIn() {
  return expires_at > Date.now();
}
function loginOrLogout() {
    return expires_at > Date.now() ?
    <div onClick={actions.dropAuthData}><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Logout</li></div> :    
    <div onClick={auth.login}><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Login</li></div>;
  }
  // console.log(location);
  // function computedClassName() {

  // }
  // const menuItems = [
  //   {key: 'home', active: location.pathname === '/', name: 'Home'},
  //   {key: 'allpolls', active: location.pathname === '', name: 'Home'},
  //   {key: 'home', active: location.pathname === '/', name: 'Home'},
  //   {key: 'home', active: location.pathname === '/', name: 'Home'},
  // ]
  // const items = [
  //     <Link to="/" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Home</li></Link>,
  //     <Link to="/polls" ><li className={`navbar-link ${location.pathname === '/polls' ? 'active' : ' '}`}>Polls</li></Link>,
  //     <Link to={`/poll/create/${uuidv4()}`} ><li className="navbar-link">Create Poll</li></Link>,
  //     <Link to="/profile" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Profile</li></Link>
  // ];       
  console.log('location.pathname', location.pathname);
  return (
    <Menu stackable>
      <Menu.Item as={Link} to="/" active={location.pathname === '/'} name="Home" />
      <Menu.Item as={Link} to="/polls" active={location.pathname === '/polls'} name="View Polls" />
      <Menu.Item as={Link} to={`/poll/create/${uuidv4()}`} active={location.pathname.includes('create')} name="Create a Poll" />
      {isLoggedIn() && <Menu.Item as={Link} to="/profile" active={location.pathname === '/profile'} name="Profile" disabled={!isLoggedIn()} />}
      <Menu.Menu position="right">
        <Menu.Item name="Login" disabled={isLoggedIn()} onClick={auth.login} />
        <Menu.Item as={Link} to="/" name="Logout" disabled={!isLoggedIn()} onClick={actions.dropAuthData} />
      </Menu.Menu>
    </Menu>
    // <nav className="navbar">
    // <ul>
    //   <Link to="/" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Home</li></Link>
    //   <Link to="/polls" ><li className={`navbar-link ${location.pathname === '/polls' ? 'active' : ' '}`}>Polls</li></Link>
    //   <Link to={`/poll/create/${uuidv4()}`} ><li className="navbar-link">Create Poll</li></Link>
    //   <Link to="/profile" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Profile</li></Link>      
    //   {loginOrLogout()}
    // </ul>
    // </nav>
  )
}
function mapStateToProps(state,ownProps) {
  return {
    expires_at: state.auth.expires_at,
  }
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({dropAuthData}, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));