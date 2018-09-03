const Recipe = require('./recipe.js');
const recipeFuncs = require('./index.js');

const resolvers = {
    Query: {
        getRecipe: function (_, {id}) {
            return recipeFuncs.getRecipeById(id)
                .then(returnRecipe)
        },
    },

    Mutation: {
        createRecipe: function (_, {input}) {
            return recipeFuncs.createRecipe(input)
                .then(returnRecipe)
            
        },
        updateRecipe: function (_, {id, input}) {
            return recipeFuncs.updateRecipe(id, input)
                .then(returnRecipe)
        },
    },
};

module.exports = resolvers;

function returnRecipe (recipe) {
    return new Recipe(recipe);
}