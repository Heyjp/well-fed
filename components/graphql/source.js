class Recipe {
    constructor({id, name, ingredients}) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
    }
}

class User {
    constructor({email, password}) {
        this.email = email;
        this.password = password;
    }
}

module.exports = Recipe;