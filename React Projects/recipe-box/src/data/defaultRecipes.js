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
  },
  'acorn-squash-with-orange-marmalade': {
    key: uuidv4(),
    name: 'Acorn Squash with Orange Marmalade',
    urlName: 'acorn-squash-with-orange-marmalade',    
    ingredients: ['1 medium acorn squash, halved lengthwise', '1 tablespoon orange marmalade', '1 teaspoon butter or margarine', '1/8 teaspoon salt'],
    directions: ['Preheat oven to 400°F (204°C).', 'Remove seeds and strings from squash halves.', 'Cut a small piece off outside of each half to make a flat space on which the half can stand level.', 
    'Place halves in a shallow pan or casserole in 1/4 inch (6 mm) water with insides facing down. Bake for 35 minutes.', 'Combine marmalade and butter in a small bowl.', 'Remove squash from oven, invert in pan or dish. Salt lightly.', 'Spread marmalade and butter mixture on edges of squash, allowing excess to run into center.', 'Place under broiler for 5 minutes or until lightly browned.'],
    tags: ['vegetable', 'squash', 'vegan', 'side dish'],
    image: 'images/beef-stew.jpg'    
  },
  'baba-ganoush': {
    key: uuidv4(),
    name: 'Baba Ganoush',
    urlName: 'baba-ganoush',    
    ingredients: ['1 medium-large eggplant, any variety, 1 to 1½ pounds', '2 tablespoons raw tahini', 'Juice of 1 lemon', '1 clove garlic, crushed', '3 tablespoons olive oil', '½ tsp salt', 'Paprika or cayenne pepper, as a garnish'],
    directions: ['Roast the eggplant. This can be done in a variety of ways, but the flesh should be fully cooked and the skin should be burned and falling off easily. An effective method is to prick the eggplant and place it a few inches under a broiler, turning it as the exposed skin blackens, about every 3-4 minutes. Place a pan underneath to catch the juices, and discard them.', 'Scrape off the eggplant skin. It\'s all right if you miss a few burned bits.', 
    'Finely chop or blend the eggplant flesh with the rest of the ingredients. The consistency should be smooth. Reserve a bit of the olive oil, and drizzle that over the top. Sprinkle with some paprika or cayenne.(I use lemon instead of lime juice.)'],
    tags: ['vegetable', 'middle eastern', 'mediterranean', 'vegan', 'dip', 'appetizer'],
    image: 'images/beef-stew.jpg'    
  },
  'black-bean-soup': {
    key: uuidv4(),
    name: 'Black Bean Soup',
    urlName: 'black-bean-soup',    
    ingredients: ['6 cups dried black beans', '5 bay leaves', '1 red bell pepper, diced', '1 green bell pepper, diced', '1 teaspoon chili powder', '1 teaspoon cumin', '7 cloves garlic, minced', '1 or 2 jalapeños, finely chopped (to taste)', '1½ large onions, diced', '1 tablespoon red wine vinegar', 'Salt and pepper to taste', '½ cup chopped cilantro', '1 cup sour cream for garnish'],
    directions: ['Pick over the beans.', 'Place in large bean pot and add water to cover by at least 2 inches (2.5 cm).', 'Soak overnight, then change water.', 'Bring to a boil.', 'Reduce heat, then simmer until beans start to soften, around ½ hour.', 'Add bay leaves, bell peppers (both), chili powder, cumin, garlic, jalapeños, onions, and red wine vinegar.', 'Add salt and pepper to taste.', 'Simmer ½ to 1 hour, until beans are soft.', 'Take out bay leaves.', 'Stir in cilantro.', 'Add some sour cream.', 'Serve.'],
    tags: ['tex-mex', 'soup', 'vegan'],
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