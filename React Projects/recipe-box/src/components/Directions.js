import React from 'react';

const Directions = ({directions}) => {
  return (
    <div>
      <ol>
      {directions.map(direction => <li>{direction}</li>)}
      </ol>
    </div>
  )
}
export default Directions;