class Ingredient {
    constructor({name, quantity, measurement, nutrition}) {
        this.name = name;
        this.quantity = quantity;
        this.measurement = measurement;
        this.nutrition = nutrition.
    }
}

module.exports = Ingredient;


/*

    {
        "name": "Tomato Sauce",
        "measurement": "cups",
        "quantity": "1 3/4"
    }

    nutrition: {
        calories: 200,
        protein: 50 // in grams
        fat: 10,
        carbohydrate: 17
    }


    // What if an ingredient is a recipe?

    {
        "Enchilada Sauce",
        "measuremnt": "ml",
        "quantity": "500"
    }

    could connect

    // Up to user to add Recipe rather than auto adding a new recipe (possible feature)
*/