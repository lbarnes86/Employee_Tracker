const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require("./config/connection");
//require('console.table');

// Starting inital prompt //
const start = () => {
  inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "Welcome, please select an item to continue",
      choices: [
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "View a Department",
        "View a Role",
        "View an Employee",
        "Update an Employee's Role",
        // 'Update an Employee\'s Manager',
        "Delete a Department",
        "Delete a Role",
        "Delete an Employee",
        // 'View Department\'s salary budget',
        "Exit menu",
      ],
    })
    .then((answers) => {
      console.log(answers);
      switch (answers.options) {
        case "Add a Department":
          addDepartment();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "View a Department":
          viewDepartment();
          break;
        case "View a Role":
          viewRole();
          break;
        case "View an Employee":
          viewEmployee();
          break;
        case "Delete a Department":
          deleteDepartment();
          break;
        case "Delete a Role":
          deleteRole();
          break;
        case "Update an Employee's Role":
          updateEmployee();
          break;
        case "Exit menu":
          exit();
          break;
        default:
          break;
      }
    });
};
// *************************Add a Department Logic*****************************
const addDepartment = async () => {
    // console.log('works');
    const answers = await inquirer.prompt(
      {
        type: 'input',
        name: 'department',
        message: 'Please input a department you want to add'
      })
      console.log(answers);
      try {
        const result = await connection.query(
      `INSERT INTO department (department_name)
        VALUES ('${answers.department}');`) 
        console.log(`'The department ${answers.department} was added successfully'`);
      } catch (err) {
        console.log("catch");
        throw err
      }
      start();
    };