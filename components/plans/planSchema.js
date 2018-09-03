const inputs = `
    input MealInput {
        name: String
        categories: []
    }
`

const mutations = `
    createMealPlan(input: MealPlanInput): MealPlan
    updateMealPlan(id: ID!, input: MealPlanInput): MealPlan
`

const types = `
    type MealPlan {
        id: ID!
        name: String
        categories: 
            [ 
                { 
                    Category: String
                    Recipes: [ {id: ID! name: String, ingredients: [String]} ]
                } 
            ]
        Information: {
            calories: Int
            meals: Int
            cost: String
        }
        created_by: String
        copied_from: ID
        description: [String]
    }
`

const queries = `
    getMealPlan(id: ID!): MealPlan
`

module.exports = {inputs, mutations, types, queries};