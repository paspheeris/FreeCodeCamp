//Root Reducer
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import defaultAddRecipe from './defaultAddRecipe';

const rootReducer = combineReducers({recipes, routing: routerReducer})
// const allReducers = Object.assign({}, recipes);
// const rootReducer = combineReducers(allReducers);

export default rootReducer;