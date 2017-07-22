import React from 'react';
// import { Link, IndexLink} from 'react-router';
// import imgSrc from '../images/asian-salmon.jpg';
import { Link } from 'react-router-dom';


const RecipeTile = ({recipe, urlTitle}) => {
  // console.log(props.recipeTitle);
  // console.log(urlTitle);
  const imgSrc = require(`../${recipe.image}`);
  return (
    <Link to={`recipe/${urlTitle}`} >
    <div className='tile'>
      <img className='tile-image' src={imgSrc} alt={recipe.name}/>
      <h3>{recipe.name}</h3>
    </div>
    </Link>
  );
};

export default RecipeTile;