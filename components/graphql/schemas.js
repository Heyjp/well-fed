const RecipeSchema = require('../recipe/recipeSchema.js');
const UserSchema = require('../user/userSchema.js');

const types = [];
const queries = [];
const inputs = [];
const mutations = [];

const Schemas = [RecipeSchema, UserSchema];

Schemas.forEach(e => {
    types.push(e.types);
    queries.push(e.queries);
    inputs.push(e.inputs);
    mutations.push(e.mutations);
});

const schema = `

    ${types.join('\n')}

    ${inputs.join('\n')}

    type Query {
        ${queries.join("")}
    }

    type Mutation {
        ${mutations.join("")}
    }

    schema {
        query: Query
        mutation: Mutation
    }
`

module.exports = schema;