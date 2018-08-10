const Recipe = require('./source.js');
const recipeFuncs = require('../recipe/index.js');

var root = {
    getRecipe: function ({id}) {
        // if (!fakeDatabase[id]) return false;
        // return new Recipe(id, fakeDatabase[id]);
        return recipeFuncs.getRecipeByIndex(id)
            .then(res => {
                return new Recipe(res);
            });
    },
    createRecipe: function ({input}) {
        // var id = Math.floor(Math.random() * Math.floor( 50))
        // fakeDatabase[id] = input;
        return recipeFuncs.createRecipe(input)
            .then(res => {
                return new Recipe(res);
            })
        
    },
    updateRecipe: function ({id, input}) {
        fakeDatabase[id] = input;
        return new Recipe(id, input);
    }
}


module.exports = root;