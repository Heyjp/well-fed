const db = require('../db/index.js');


function getMealPlanById (id) {
    let search;
    return db.client.query(search, [id])
        .then(res => {
            return res.rows[0];
        })
};

function createMealPlan (plan) {
    let query;
    let { name, categories, information, instructions } = plan;
    // let user = req.user;
    return db.client.query(query, [name, categories, information, instructions])
        .then(res => {
            return res;
        })
}


module.exports = { getMealPlanById, createMealPlan };