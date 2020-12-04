let connection = require("./connection");

class Store{
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees() {
        return this.connection.query("SELECT * FROM employees")
    }
    findAllDepartments() {
        return this.connection.query("SELECT * FROM departments")
    }