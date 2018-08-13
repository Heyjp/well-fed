const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALTROUNDS = 10;

const db = require('../db/index.js');

async function authUser (email, password) {

    const query = "SELECT email, password FROM users WHERE email = $1";
    const values = [email];

    return db.client.query(query, values)
        .then(res => {
            // If email does not exist exit
            if (res.rows.length === 0 ) return false;
            // if email exists but password !== password
            let verify = bcrypt.compare(password, res.rows[0].password, function (err, res) {
                return res;
            });
            if (!verify) return false;
            // if both email & password match return jwt 
            let token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: 'foo'
            }, process.env.CLIENT_SECRET);

            return token;
        })
}


async function createUser ({email, password}) {
    const emailCheck = "SELECT email FROM users WHERE email = $1";
    const insertQuery = "INSERT INTO users (email, password)  VALUES($1, $2) RETURNING email";
   
    let emailExists = await db.client.query(emailCheck, [email])
        .then(res => res.rows.length > 0 ? true : false);

    if (emailExists) return false;

    let hashedPass = await bcrypt.hash(password, SALTROUNDS)
        .then(res => res);

    return db.client.query(insertQuery, [email, hashedPass])
        .then(res => {
            return res.rows[0];
        })
}

module.exports = {authUser, createUser};


// hash passwords!
// SIGN TOKENS