let {prompt} = require("inquirer");
const {addEmployee} = require("./db/store");
require ("console.table");

const db = require("./db/store")

async function loadMainPrompts(){
    const {choice} = await prompt ({
        type: 'list',
        message: 'Select your choice.',
        name: 'choice',
        choices: [
            'View all employees',
            'View all departments',
            'View all roles',
        ]
    })
}