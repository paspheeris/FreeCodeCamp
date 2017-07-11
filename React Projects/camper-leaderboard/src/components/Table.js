import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>Camper Leaderboard</tr>
        <tr>
          <td>#</td>
          <td>Camper Name</td>
          <td>Points in past 30 days</td>
          <td>All time points</td>          
        </tr>
      </thead>
      <tbody>
        {props.campers.map((camper, index) => {
          return <TableRow 
                    key={index}
                    index={index}
                    img={camper.img}
                    username={camper.username}
                    recent={camper.recent}
                    alltime={camper.alltime}/>
        })}
      </tbody>
    </table>
  )
}

export default Table;