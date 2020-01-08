const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

module.exports = client;