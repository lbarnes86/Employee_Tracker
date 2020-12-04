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
    findAllRoles() {
        return this.connection.query("SELECT * from roles")
    }
    addEmployee(response) {
        return this.connection.query("INSERT INTO employees SET ?", {
            first_name: response.firstName,
            last_name: response.lastName,
            role_id: response.roleID, 
            manager_id: response.managerID,
        });
    }
    addRole(response) {
        return this.connection.query("INSERT INTO roles SET ?", {
            title: response.roleTitle,
            salary: response.salaryAmt,
            department_id: response.deptID
        })
    }
    addDepartment(response) {
        return this.connection.query("INSERT INTO departments SET ?", {
            name: response.deptName
        })
    }
    updateEmployee(response) {
        return this.connection.query("UPDATE employees SET role_id ? WHERE last_name ?", {