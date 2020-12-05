// require mysql for database
const mysql = require('mysql2')


let config = {
    host: "localhost",
    port: 8080,
    user: "root",
    password: "rootroot",
    database: "employee_trackerDB"
};

module.exports = config;