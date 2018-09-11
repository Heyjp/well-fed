const inputs = `
    input RecipeInput {
        name: String
        ingredients: [String]
    }   
`

const mutations = `
        createRecipe(input: RecipeInput): Recipe
        updateRecipe(id: ID!, input: RecipeInput): Recipe
`

const types = `
    type Recipe {
        id: ID!
        name: String
        ingredients: [String]
    }
`

const queries = `
        getRecipe(id: ID!): Recipe
        getRecipes(searchTerm: String): [Recipe]
`


module.exports = {inputs, mutations, types, queries };




