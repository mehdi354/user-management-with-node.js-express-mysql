const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
    // host: "localhost",
    // user: "root",
    // database: "blog",
    // password: "",
});

module.exports = pool;