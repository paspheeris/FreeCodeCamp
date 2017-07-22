import * as types from './actionTypes';

export function addRecipe(localState) {
  console.log('dispatching ADD_RECIPE');
  // return {type: types.INITIALISE_ADD_RECIPE}
  return {type: types.ADD_RECIPE, localState: localState};
}
export function editRecipe(localState) {
  console.log('dispatching EDIT_RECIPE');  
  return {type: types.EDIT_RECIPE, localState: localState};
}