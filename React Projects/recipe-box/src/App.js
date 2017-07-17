import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

//Import Components
// import Single from './components/Single.js';
// import RecipeGrid from './components/RecipeGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}



export default App;
