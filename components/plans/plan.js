/*

    MEAL PLAN Example

    const MealPlan = {
        id: 252,
        name: "Heyjps Plan",
        // an array of objects with a MealTime / Name alongside an array of recipes for that given time
        MealCategories: [ { Category: 'Breakfast', Recipes: [ { name: "Poptarts" }]}],
        // an object containing details about the meal plan. e.g total calories, prep time, meal count, dietary requirements
        Information: {
            nutrition: {
                calories: 2500
            },
            meals: 5,
            cooktime: [40, "mins"]
            cost: "£15"
        },
        created_by: "heyjp",
        // If meal plan was copied from another plan
        original/copied_from: null,
        // How to make the meal plan? Or just take recipe information
        description: ["Step one: Boil water", "PreHeat Oven"]
    }
*/

class MealPlan {
    constructor({id, name, categories, information, created_by, edited, original_plan, instructions, ingredients}) {
        this.id = id;
        this.name = name;
        this.categories = categories;
        this.infommation = information;
        this.created_by = created_by;
        this.last_edited = edited;
        this.original = original_plan;
        this.instructions = instructions;
        this.ingredients = ingredients;
    }
}

module.exports = MealPlan;