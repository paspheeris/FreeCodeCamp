import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
