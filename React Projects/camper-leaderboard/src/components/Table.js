import React, { Component } from 'react';
import TableRow from './TableRow';
import {SORT_TYPES} from '../actions/actionTypes';

class Table extends React.Component {
  constructor() {
    super();
    // console.log('table.js', this.props);
    this.renderRows = this.renderRows.bind(this);
  }
  renderRows() {
    if(this.props.campers) {
      return this.props.campers.map((camper, index) => {
            return <TableRow 
                      key={index}
                      index={index}
                      img={camper.img}
                      username={camper.username}
                      recent={camper.recent}
                      alltime={camper.alltime}
                      />
          })
    }
  }
  render() {
    console.log(this.props);
    return (
      <table className="table">
        <thead>
          {/*<tr>Camper Leaderboard</tr>*/}
          <tr className="table-thead-tr">
            <td>#</td>
            <td className='profile-pic-column'></td>
            <td onClick={this.props.sortBy === SORT_TYPES.NAME_DESC ? 
                        () => this.props.sort(SORT_TYPES.NAME_ASC) :
                        () => this.props.sort(SORT_TYPES.NAME_DESC)}>
              Camper Name</td> 
            <td onClick={this.props.sortBy === SORT_TYPES.PAST_30_DESC ? 
                        () => this.props.sort(SORT_TYPES.PAST_30_ASC) :
                        () => this.props.sort(SORT_TYPES.PAST_30_DESC)}>
              Points in past 30 days</td>
            <td onClick={this.props.sortBy === SORT_TYPES.ALL_TIME_DESC ? 
                        () => this.props.sort(SORT_TYPES.ALL_TIME_ASC) :
                        () => this.props.sort(SORT_TYPES.ALL_TIME_DESC)}>
              All time points</td>          
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default Table;