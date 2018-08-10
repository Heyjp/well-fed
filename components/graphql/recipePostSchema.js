const { buildSchema } = require('graphql');

var recipeSchema = `
    input RecipeInput {
        name: String
        ingredients: [String]
    }

    type Recipe {
        id: ID!
        name: String
        ingredients: [String]
    }

    type Query {
        getRecipe(id: ID!): Recipe
    }

    type Mutation {
        createRecipe(input: RecipeInput): Recipe
        updateRecipe(id: ID!, input: RecipeInput): Recipe
    }
`;

module.exports = buildSchema(recipeSchema);