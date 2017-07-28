import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // componentDidUpdate() {
  //   console.log('componentdidupdate');
  //   if (this.state.counter < 1000 && this.props.oneKMode) {
  //     this.counter++;
  //     this.props.iterate();
  //   } else if (this.counter >= 1000) {
  //     this.props.toggleOneK;
  //   }
  // }
  
  render() {
    // console.log(this.props.arr);
    return (
      <div className="grid-container" style={{width: this.props.xDimension * 20 + 'px'}}>
        {this.props.arr.map(subArr => {
          return subArr.map(cell => {
            return (cell ? <div className="cell on" /> : 
                           <div className="cell off" />)
          })
        })
        }
      </div>
    );
  }
}

Grid.propTypes = propTypes;

Grid.defaultProps = defaultProps;

export default Grid;
