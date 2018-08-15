const Recipe = require('./recipe.js');
const recipeFuncs = require('./index.js');

const resolvers = {
    Query: {
        getRecipe: function (_, {id}) {
            // if (!fakeDatabase[id]) return false;
            // return new Recipe(id, fakeDatabase[id]);
            return recipeFuncs.getRecipeByIndex(id)
                .then(res => {
                    return new Recipe(res);
                });
        },
    },

    Mutation: {
        createRecipe: function (_, {input}) {
            // var id = Math.floor(Math.random() * Math.floor( 50))
            // fakeDatabase[id] = input;
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