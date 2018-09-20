const inputs = `
    type MealPlanInput {
        id: ID!
        name: String
        ingredients: [String]
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
            created_by: String
            copied_from: ID
            description: [String]
        }
`

const queries = `
    getMealPlan(id: ID!): MealPlan
`

module.exports = {inputs, mutations, types, queries};