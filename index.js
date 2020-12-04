let {prompt} = require("inquirer");
const {addEmployee} = require("./db/store");
require ("console.table");

const db = require("./db/store")
// initial prompt
async function loadMainPrompts(){
    const {choice} = await prompt ({
        type: 'list',
        message: 'Select your choice.',
        name: 'choice',
        choices: [
            'View all employees',
            'View all departments',
            'View all roles',
            'Add new employee',
            'Add new department',
            'Add new role',
            'Update employee roles'
        ]
    });
    switch (choice){
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'View all departments':
            viewAllDepartments();
            break;
        case 'View all roles':
            viewAllRoles();
            break;
        case 'Add new employee':
            addNewEmployee();
            break;
        case 'Add new department':
            addNewDepartment();
            break;
        case 'Add new role':
            addNewRole();
            break;
        case 'Update employee roles':
            updateEmployeeRole();
            break;
            default:
                process.exit()

    }
}

