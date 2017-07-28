import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid'

class App extends Component {
  constructor(props) {
    super(props);
    // let counter = 0;
    // let oneKMode = false;
    this.state = {
      xDimension: 100,
      generation: 0,
      startTime: 0,
      elapsed: 0,
      timePerGeneration: 0,
      interval: false,
      arr: []
    };
    this.onRandomizeClick = this.onRandomizeClick.bind(this);
    this.initializeArr = this.initializeArr.bind(this);
    this.iterate = this.iterate.bind(this);
    this.nextIterationStatus = this.nextIterationStatus.bind(this);
    this.startStop = this.startStop.bind(this);
    this.handleDimensionChange = this.handleDimensionChange.bind(this);
    
    // this.toggleOneK = this.toggleOneK.bind(this);
    // this.oneKGenerations = this.oneKGenerations.bind(this);
    
    
  }
  componentWillMount() {
    this.initializeArr();
  }
  initializeArr() {
    console.log(typeof this.state.xDimension);
    let x = parseFloat(this.state.xDimension);
    // this.setState({arr: ''});
    this.setState({arr: Array(x).fill(Array(x).fill(false))});
  }
  onRandomizeClick() {

    this.setState({arr: this.state.arr.map(subArr => {
      return subArr.map(cell => {
        return (Math.random() < 0.5 ? false : true);
      });
    }),
    generation: 0});
  }

  iterate() {
    this.setState(
      {arr: this.state.arr.map((subArr, subArrInd) => {
      return subArr.map((cellStatus, cellInd) => {
        return (this.nextIterationStatus(this.state.arr, subArr, subArrInd, cellStatus,cellInd));
      });
    }),
  generation: this.state.generation + 1,
  timePerGeneration: (this.state.elapsed / this.state.generation),
  elapsed: Date.now() - this.state.startTime});
  }
  startStop() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({interval: false});
    } else {
      this.setState({interval: setInterval(this.iterate, 0),
                    startTime : Date.now()});
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
      //N NE E SE S SW W NW
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
  handleDimensionChange(e) {
    let newX = parseInt(e.target.value);
    this.setState({xDimension: newX,
                   arr: Array(newX).fill(Array(newX).fill(false))});
    // let x = parseInt(this.state.xDimension);
    // // this.setState({arr: ''});
    // this.setState({arr: Array(x).fill(Array(x).fill(false))});
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.initializeArr}>InitializeArr</button>
        <button onClick={this.onRandomizeClick}>
          Randomize
        </button>
        <button onClick={this.iterate}>Iterate</button>
        <button onClick={this.startStop}>Start/Stop</button>
        {/*<button onClick={this.toggleOneK}>oneKGenerations</button>*/}
        <button onClick={this.oneKGenerations}>oneKGenerations</button>
        <input type="number" value={this.state.xDimension} onChange={this.handleDimensionChange} step='10'/>
        <span>Generations: {this.state.generation}</span>
        <span>Elapsedtime {this.state.elapsed}</span>
        <span>Time Per Generation {this.state.timePerGeneration}</span>
        <Grid arr={this.state.arr} iterate={this.iterate} 
          xDimension={this.state.xDimension}/>
      </div>
    );
  }
}

export default App;
