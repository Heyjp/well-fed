const jsonwebtoken = require('jsonwebtoken');
const Recipe = require('./source.js');
const recipeFuncs = require('../recipe/index.js');
const authFunc = require('../auth/index.js');



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
        return new Recipe(id, input);
    },
    createUser: function ({input}) {
        let {email, password} = input;
        return authFunc.createUser({email, password})
            .then(res => {
                console.log(res, 'createUser res');
                return res.email;
            })
    },
    loginUser: (_, {email, password}) => {
        console.log(email, password);

        let exists = authFunc.authUser(email, password)
            .then(res => {
                console.log(res);
            })

        return jwt.sign({id: 'test id'}, 'hello world', {expresIn: '1h'})
    }
}


module.exports = root;