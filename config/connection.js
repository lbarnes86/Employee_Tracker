// require mysql for database
const mysql = require('mysql')
// require util for connection to mysql
const util = require ('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
  password: 'rootroot',
  database: 'employee_trackerDB',
});

connection.query = util.promisify(connection.query);

module.exports = connection;