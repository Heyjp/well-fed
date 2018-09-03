class Recipe {
    constructor({id, name, ingredients}) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
    }
}


module.exports = Recipe;

/*
    // Example
    {
        name: "Enchilada Sauce",
        time: {
            prep: 20,   // In minutes
            cook: 30,
            total: 50
        }
        portions: 4, // 1 portion = serving
        directions: ["Prepare ingredients"] // Display markdown or just array text, how to make it wrap? 
        upvotes: ["0248sd9"], // takes unique user id and adds it to array
        downvotes: [],
        tags: [] // Categories that describe what the recipe is like, quick, easy, tasty,
        created_by: {
            username: "user",
            id: 213129i312
        },
        original_url: // does the recipe come from a site
        forked: "recipe_id" // copy fo recipe for editing
    }

    // Rating system, stars, thumbs up/down, or words? Tasty, Filling, Easy, Quick, Simple, Complex




*/