require('dotenv').config()
const express = require('express');
const app = express();

const jwt = require('express-jwt');
const graphqlHTTP = require('express-graphql');
const graphQLTools = require('graphql-tools');
const db = require('./components/db/index.js');

db.client.connect();

const typeDefs = require('./components/graphql/schemas.js');
const resolvers = require('./components/graphql/resolvers.js');

const authMiddleware = jwt({
    secret: process.env.CLIENT_SECRET
});

const makeNewSchema = graphQLTools.makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/graphql', graphqlHTTP((req, res, params) => ({
    schema: makeNewSchema,
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
