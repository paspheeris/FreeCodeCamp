import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';




class Main extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    // console.log(e.target.value);
    this.props.edit(e.target.value);
  }
  
  render() {
    return (

      <div className="Main">
        <MarkdownInput text={this.props.text}
                       changeHandler={this.changeHandler}
                       />
        <MarkdownOutput text={this.props.text}/>
      </div>

    );
  }
}

export default Main;
