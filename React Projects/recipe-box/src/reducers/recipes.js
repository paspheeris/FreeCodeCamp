//a reducer takes in two things
//1: the action (info about what happened)
//2: copy of current state


import {defaultAddRecipe} from '../data/defaultRecipes.js';
import * as types from '../actions/actionTypes';

function recipes(state = [], action) {
  // console.log(state);
  switch(action.type) {
    case types.ADD_RECIPE: 
    // console.log(state);
    // console.dir(action);
    return Object.assign({}, state, {[action.localState.urlName]: action.localState});
    case types.EDIT_RECIPE:
    // console.dir(action);
      return Object.assign({}, state, {[action.localState.urlName]: action.localState});
    default:
      return state;
  }
}

export default recipes;