const client = require('../db/index.js');

async function authUser (email, password) {

    const query = "SELECT email, password FROM users WHERE email = $1";
    const values = [email];

    return client.client.query(query, values)
        .then(res => {
            console.log(res.rows);
        })
}


async function createUser ({email, password}) {
    const query = "INSERT INTO users (email, password)  VALUES($1, $2) RETURNING email";
    const values = [email, password];

    return client.client.query(query, values)
        .then(res => {
            console.log(res.rows[0]);
            return res.rows[0];
        })
}

module.exports = {authUser, createUser};


// hash passwords!
// SIGN TOKENS