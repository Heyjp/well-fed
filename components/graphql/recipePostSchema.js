var recipeSchema = `
    input UserInput {
        email: String
        password: String
    }

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
        createUser(input: UserInput): String
        loginUser(input: UserInput): String
    }
`;

module.exports = buildSchema(recipeSchema);