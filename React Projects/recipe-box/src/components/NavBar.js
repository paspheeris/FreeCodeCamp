import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router'


const NavBar = ({location}) => {
  // console.log(location);
  // function computedClassName() {

  // }
  return (
    <nav className="navbar">
    <ul>
      <Link to="/" ><li className={`navbar-link ${location.pathname === '/' ? 'active' : ' '}`}>Home</li></Link>
      <Link to="/add-recipe" ><li className={`navbar-link ${location.pathname === '/add-recipe' ? 'active' : ' '}`}>Add Recipe</li></Link>
      <Link to="/" ><li className="navbar-link">Tags</li></Link>
      
    </ul>
    </nav>
  )
}

export default withRouter(NavBar);