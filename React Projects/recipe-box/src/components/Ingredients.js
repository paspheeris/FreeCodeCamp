import React from 'react';

const Ingredients = ({ingredients}) => {
  return (
    <div>
      <ul>
      {ingredients.map(ingredient => <li>{ingredient}</li>)}
      </ul>
    </div>
  )
}
export default Ingredients;