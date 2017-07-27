import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.arr);
    return (
      <div className="grid-container" >
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
