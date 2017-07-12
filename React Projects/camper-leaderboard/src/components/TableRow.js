import React from 'react';


const TableRow = (props) => {
  return (
    <tr>
      <td>
        {/*<img src={props.img} />*/}
        {props.index + 1}</td>
      <td className="TableRow-username">{props.username}</td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>      
    </tr>
  )
}

export default TableRow;