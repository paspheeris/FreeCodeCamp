import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Import Components
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Polls from './components/Polls';
import PollEditable from './components/PollEditable';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/polls" component={Polls} />
              <Route path="/poll/:mode/:uuid?" component={PollEditable} />
            </Switch>
          </div>
        </BrowserRouter>        
      </Provider>
    );
  }
}

export default App;
