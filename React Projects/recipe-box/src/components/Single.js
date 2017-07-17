import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router'
// import { Link, IndexLink} from 'react-router';

import PrepInfo from './PrepInfo';
import Ingredients from './Ingredients';
import Directions from './Directions';


const Single = ({recipes, location}) => {
  // console.log(location.pathname.split('/')[2]);
  let recipeName = location.pathname.split('/')[2];
  let recipe = recipes[recipeName];
  const imgSrc = require(`../${recipe.image}`);
  return (
    <div>
      <img className='tile-image' src={imgSrc} alt={recipe.name}/>
      <PrepInfo />
      <Ingredients ingredients={recipe.ingredients}/>
      <Directions directions={recipe.directions}/>
    </div>
  );
};

// export default Single;

function mapStateToProps(state) {
  return {
    recipes : state.recipes,
    // location: state
  }
}


export default withRouter(connect(mapStateToProps, () => ({}))(Single));