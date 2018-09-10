const UserResolvers = require('../user/userResolvers.js');
const RecipeResolvers = require('../recipe/recipeResolvers.js');
const PlanResolvers = require('../plans/planResolvers.js');

const combinedResolvers = Object.assign(UserResolvers, RecipeResolvers, planResolvers);

module.exports = combinedResolvers;