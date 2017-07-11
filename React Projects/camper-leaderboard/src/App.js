import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as camperActions from './actions/actions'

import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';


class App extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Table campers={this.props.campers}/>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    campers: state.campers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(camperActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
