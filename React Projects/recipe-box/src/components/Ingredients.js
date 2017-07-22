import React from 'react';

const Ingredients = ({ingredients}) => {
  return (
    <div>
      <ul>
      {ingredients.map((ingredient, ind) => <li key={ind}>{ingredient}</li>)}
      </ul>
    </div>
  )
}
export default Ingredients;