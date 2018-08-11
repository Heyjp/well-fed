require('dotenv').config()
const express = require('express');
const app = express();

const jwt = require('express-jwt');
const graphqlHTTP = require('express-graphql');

const db = require('./components/db/index.js');

db.client.connect();

const schema = require('./components/graphql/recipePostSchema.js');
const resolver = require('./components/graphql/recipePostResolver.js');

const authMiddleware = jwt({
    secret: 'hello world'
});

var fakeDatabase = {
    "1": {
        name: "Pizza",
        ingredients: ["Tomato", "Cheese"]
    }
};

app.use('/graphql', graphqlHTTP((req, res, params) => ({
    schema,
    rootValue: resolver,
    graphiql: true,
    context: req.user
})));

app.use(authMiddleware);
app.get('/', function (req, res) {
  res.send('Hello World')
});
 
app.listen(3000)


/*

    Create a recipe
    update a recipe
    delete a recipe

    Create a meal
    update a meal
    delete a meal


*/
