require('dotenv').config()
const express = require('express');
const app = express();

const graphqlHTTP = require('express-graphql');

const db = require('./components/db/index.js');

db.client.connect();

const schema = require('./components/graphql/recipePostSchema.js')
const resolver = require('./components/graphql/recipePostResolver.js')


var fakeDatabase = {
    "1": {
        name: "Pizza",
        ingredients: ["Tomato", "Cheese"]
    }
};


app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
}))


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)


/*

    Create a recipe
    update a recipe
    delete a recipe

    Create a meal
    update a meal
    delete a meal


*/
