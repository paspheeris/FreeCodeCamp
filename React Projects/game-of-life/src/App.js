import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: false,
      arr: ''
    };
    this.onRandomizeClick = this.onRandomizeClick.bind(this);
    this.initializeArr = this.initializeArr.bind(this);
    this.iterate = this.iterate.bind(this);
    this.nextIterationStatus = this.nextIterationStatus.bind(this);
    this.startStop = this.startStop.bind(this);
    
  }
  componentWillMount() {
    this.initializeArr();
  }
  initializeArr() {
    this.setState({arr: Array(30).fill(Array(30).fill(false))});
  }
  onRandomizeClick() {
    this.setState({arr: this.state.arr.map(subArr => {
      return subArr.map(cell => {
        return (Math.random() < 0.5 ? false : true);
      });
    })});
  }
  iterate() {
    this.setState({arr: this.state.arr.map((subArr, subArrInd) => {
      return subArr.map((cellStatus, cellInd) => {
        return (this.nextIterationStatus(this.state.arr, subArr, subArrInd, cellStatus,cellInd));
      });
    })});
  }
  startStop() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({interval: false});
    } else {
      this.setState({interval: setInterval(this.iterate, 250)});
    }
  }
  nextIterationStatus(mArr, sArr, sArrInd, cellStatus, cellIndex) {
    let neighborCount = 0;
    const y = sArrInd;
    const x = cellIndex;
    const topRow = y === 0 ? true : false;
    const bottomRow = y === mArr.length - 1 ? true : false;
    const leftMost = x === 0 ? true : false;
    const rightMost = x === sArr.length ? true : false;
    const arrAbove = topRow ? mArr[mArr.length - 1] : mArr[y - 1];
    const arrBelow = bottomRow ? mArr[0] : mArr[y + 1];
    // const arrLeft = leftMost ? mArr[]
      // console.log(bottomRow);
    
    const neighorborArr = [
      arrAbove[x],
      arrAbove[rightMost ? 0 : x + 1],
      mArr[y][rightMost ? 0 : x + 1],
      arrBelow[rightMost ? 0 : x + 1],
      arrBelow[x],
      arrBelow[leftMost ? sArr.length - 1 : x - 1],
      mArr[y][leftMost ? sArr.length - 1 : x - 1],
      arrAbove[leftMost ? sArr.length - 1 : x - 1]
    ];
    neighborCount = neighorborArr.reduce((accum, val) => {
      return accum + (val ? 1 : 0);
    }, 0);
    if (cellStatus && neighborCount < 2) return false;
    else if (cellStatus && neighborCount === 2 ||
             cellStatus && neighborCount === 3) return true;
    else if (cellStatus && neighborCount > 3) return false;
    else if (!cellStatus && neighborCount === 3) return true;
    else return false;

  }
  render() {
    return (
      <div className="App">
        <Grid arr={this.state.arr}/>
        <button onClick={this.initializeArr}>InitializeArr</button>
        <button onClick={this.onRandomizeClick}>
          Randomize
        </button>
        <button onClick={this.iterate}>Iterate</button>
        <button onClick={this.startStop}>Start/Stop</button>
      </div>
    );
  }
}

export default App;
