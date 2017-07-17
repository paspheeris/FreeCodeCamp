// class Recipe {
//   constructor(ingredients, directions, tags, image) {
//     this.ingredients = ingredients,
//     this.directions = directions,
//     this.tags = tags,
//     this.image = image
//   }
// }

const defaultRecipes = {
  'asian-salmon': {
    key: 1,
    name: 'Asian Salmon',
    urlName: 'asian-salmon',
    ingredients: ['salmon', 'soy sauce', 'ginger'],
    directions: ['Saute the fish.', 'Make the sauce'],
    tags: ['asian', 'seafood'],
    image: 'images/asian-salmon.jpg'
  },
  'beef-stew': {
    key: 2,
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