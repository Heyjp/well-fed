const Recipe = require('./recipe.js');
const recipeFuncs = require('./index.js');

const resolvers = {
    Query: {
        getRecipe: function (_, {id}) {
            return recipeFuncs.getRecipeByIndex(id)
                .then(res => {
                    return new Recipe(res);
                });
        },
    },

    Mutation: {
        createRecipe: function (_, {input}) {
            return recipeFuncs.createRecipe(input)
                .then(res => {
                    return new Recipe(res);
                })
            
        },
        updateRecipe: function (_, {id, input}) {
            return new Recipe(id, input);
        },
    },
};

module.exports = resolvers;