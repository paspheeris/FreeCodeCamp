// class Recipe {
//   constructor(ingredients, directions, tags, image) {
//     this.ingredients = ingredients,
//     this.directions = directions,
//     this.tags = tags,
//     this.image = image
//   }
// }
const uuidv4 = require('uuid/v4');

const defaultRecipes = {
  'asian-salmon': {
    key: uuidv4(),
    name: 'Asian Salmon',
    urlName: 'asian-salmon',
    ingredients: ['salmon', 'soy sauce', 'ginger'],
    directions: ['Saute the fish.', 'Make the sauce'],
    tags: ['asian', 'seafood'],
    image: 'images/asian-salmon.jpg'
  },
  'beef-stew': {
    key: uuidv4(),
    name: 'Beef Stew',
    urlName: 'beef-stew',    
    ingredients: ['beef', 'onions', 'carrots', 'potatoes'],
    directions: ['Saute the beef.', 'Saute the vegetables'],
    tags: ['beef', 'stews'],
    image: 'images/beef-stew.jpg'    
  }
}

// console.log(defaultRecipes);

export default defaultRecipes;

export const defaultAddRecipe = {
    key: uuidv4(),
    name: 'Recipe Name',
    urlName: 'new-recipe',    
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    directions: ['Step 1', 'Step 2'],
    tags: ['tag1', 'tag2'],
    image: ''    
}