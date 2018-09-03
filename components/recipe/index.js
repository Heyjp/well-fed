const client = require('../db/index.js');

function getRecipeById (id) {
    var search = 'SELECT * FROM recipes WHERE id = $1'
    return client.client.query(search, [id])
        .then(res => {
            return res.rows[0];
        });
}

async function createRecipe (input) {
    let query = "INSERT INTO recipes(name, ingredients) VALUES ($1, $2) RETURNING *";
    let { name, ingredients} = input;
    return client.client.query(query, [name, ingredients])
        .then(res => {
            return res.rows[0];
        })
        .catch(err => {
            console.log(err, 'this is err');
        })
}

function updateRecipe (recipeId, recipe) {
    let query = "UPDATE recipes SET name = $1, ingredients = $2 WHERE id = $3 RETURNING *"
    let {name, ingredients} = recipe;
    return client.client.query(query, [name, ingredients, recipeId])
        .then(res => {
            return res.rows[0];
        })
        .catch(err => {
            console.log(err, 'this is err');
        })
}


module.exports = { getRecipeById, createRecipe, updateRecipe };