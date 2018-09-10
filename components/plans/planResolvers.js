const MealPlan = require('./plan.js');

const resolvers = {
    Query: {
        getMealPlan: function (_, {id}) {
            return mealPlanFuncs.getMealPlanById(id)
                .then(res => {
                    return new MealPlan(res);
                })
        },
    }, 
    Mutation: {
        createMealPlan: function (_, {plan}) {
            return mealPlanFuncs.createMealPlan(plan)
                .then(res => {
                    return new MealPlan(res);
                })
        },
        updateMealPlan: function (_, {id, plan}) {
            return new MealPlan(id, plan)
        },
    },

}

module.exports = resolvers;