import React from 'react';

const Directions = ({directions}) => {
  return (
    <div>
      <ol>
      {directions.map((direction, ind) => <li key={ind}>{direction}</li>)}
      </ol>
    </div>
  )
}
export default Directions;