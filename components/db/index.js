const { Client } = require('pg');
const client = new Client();

const string = "CREATE TABLE IF NOT EXISTS recipes(id SERIAL, name varchar(80) NOT NULL, ingredients text[] NOT NULL)";

// Create DB if it does not exists
client.query(string)


module.exports = {
    client
}
