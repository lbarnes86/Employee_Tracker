// require mysql for database
const mysql = require('mysql')
// require util for connection to mysql
const util = require ('util');


let config = {
    host: "localhost",
    port: 8080,
    user: "root",
    password: "rootroot",
    database: "employee_trackerDB"
};

module.exports = config;