const jsonwebtoken = require('jsonwebtoken');
const Recipe = require('./source.js');
const recipeFuncs = require('../recipe/index.js');
const authFunc = require('../auth/index.js');



var resolvers = {
    Query: {
        getRecipe: function ({id}) {
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
        createUser: function (_, {input}) {
            let {email, password} = input;
            return authFunc.createUser({email, password})
                .then(res => {
                    return res.email;
                })
        },
        loginUser: (_, {input}) => {
            let {email, password} = input;
    
            return authFunc.authUser(email, password)
                .then(res => {
                    return res;
                })
    
            // return jwt.sign({id: 'test id'}, 'hello world', {expresIn: '1h'})
        },
    },
}


module.exports = resolvers;