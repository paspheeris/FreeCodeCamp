import React from 'react';


const TableRow = (props) => {
  return (
    <tr>
      <td>
        {/*<img src={props.img} />*/}
        {props.index}</td>
      <td>{props.username}</td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>      
    </tr>
  )
}

export default TableRow;