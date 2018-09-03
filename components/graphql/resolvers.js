const UserResolvers = require('../user/userResolvers.js');
const RecipeResolvers = require('../recipe/recipeResolvers.js');

const combinedResolvers = Object.assign(UserResolvers, RecipeResolvers);



module.exports = combinedResolvers;