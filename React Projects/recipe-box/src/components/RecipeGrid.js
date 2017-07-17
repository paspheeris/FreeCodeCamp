import React from 'react';
// import { Link, IndexLink} from 'react-router';
import { connect } from 'react-redux';

import RecipeTile from './RecipeTile';


const RecipeGrid = ({recipes}) => {
  console.log(recipes);
  return (
    <div className="recipe-grid">
      {Object.keys(recipes).map(recipeTitle => {
          return <RecipeTile 
                              recipe={recipes[recipeTitle]}
                             key={recipes[recipeTitle].key} 
                             urlTitle={recipeTitle}/>
        })}
    </div>
  );
};

// export default RecipeGrid;

function mapStateToProps(state) {
  return {
    recipes : state.recipes,
    // location: state
  }
}


export default connect(mapStateToProps, () => ({}))(RecipeGrid);

