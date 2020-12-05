let config = require('./utils/config')
const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

var PORT = process.env.PORT || 8080;
let connection = mysql.createConnection(config);

// connection.connect((err) => {
//     if (err) throw err;
//     welcome();

//     connection.end();
// });

// Starting inital prompt //
let runApplication = true;
 
//const welcome = () => {
    async function loadMainPrompts() {
        const {selection} = await prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'selection',
        choices: [
            'View all employees',
            'View all departments',
            'View all roles',
            'Add new employee',
            'Add new department',
            'Add new role',
            'Update employee roles',
            'Exit'
        ]
     });
    //  .then((chooseSelection) => {
    //      console.log(chooseSelection)
    switch (selection) {
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
        //case "Exit":
           // runApplication = false;
          //  break;
        
            default: 
            process.exit()
            
    }
}
    




//// View All Employees ////
// async function to be able to await
async function viewAllEmployees() { 
    // waits for findAllEmployees action to run before looking at next line of code
    let allEmployees = await db.findAllEmployees();
    console.table(allEmployees);

    loadMainPrompts();
}

// //// View All Departments ////
// async function viewAllDepartments() { 
//     let allDepartments = await db.findAllDepartments();
//     console.table(allDepartments);

//     loadMainPrompts();

// }

// //// View All Roles ////
// async function viewAllRoles() { 
//     let allRoles = await db.findAllRoles();
//     console.table(allRoles);

//     loadMainPrompts();

// }

// //// Add New Employee ////
// async function addNewEmployee() { 
//     const {choice} = await prompt([
//         {
//             type: 'input',
//             message: 'What is the employee first name?',
//             name: 'firstName'
//         },
//         {
//             type: 'input',
//             message: 'What is the employee last name?',
//             name: 'lastName'
//         },
//         {
//             type: 'input',
//             message: 'What is their role ID number?',
//             name: 'roleID'
//         },
//         {
//             type: 'input',
//             message: 'What is their manager ID number?',
//             name: 'managerID'
//         }], 
//         )   
//         await db.addEmployee(choice);
        
//     loadMainPrompts();

// }
// //// Add new role //// 
// async function addNewRole() { 
//     const {choice} = await prompt([
//         {
//             type: 'input',
//             message: 'What is the the title of the role?',
//             name: 'roleTitle'
//         },
//         {
//             type: 'input',
//             message: 'What is the salary for this role?',
//             name: 'salaryAmt'
//         },
//         {
//             type: 'input',
//             message: 'What is their department ID for the role?',
//             name: 'deptID'
//         }], 
//         )   
//         await db.addRole(choice);

//     loadMainPrompts();

// }
// //// Add new department ////
// async function addNewDepartment() { 
//     const {choice} = await prompt([
//         {
//             type: 'input',
//             message: 'What is the the name of the department?',
//             name: 'deptName'
//         }],
//     )
//     await db.addDepartment(choice);
// loadMainPrompts()
// }
// async function updateEmployeeRole() {
//     const {choice} = await prompt([
//         {
//             type: 'input',
//             message: 'Which employee would you like to update?',
//             name: 'empUpdate'
//         },
//         {
//             type: 'input',
//             message: 'What role do you want to update the employee to?',
//             name: 'roleUpdate'
//         }],
//         await db.updateEmployee(choice)
//     )
    
// }