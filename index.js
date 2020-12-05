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
    // *************************Add a Role Logic******************************
  const addRole = async () => {
    // const sqlDepartments = 'INSERT INTO roles SET ?;';
    let departments = await connection.query(
      'SELECT id, department_name FROM department'
      );
    departments = departments.map(row => {
      const currentDepartment = { name: row.department_name, value: row.id }
      return currentDepartment;
    });
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please input the title of the role.'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Please input the salary for this role.'
      },
      {
        type: 'list',
        name: 'department',
        message: 'Which department does this role belong to?',
        choices: departments,
      }]);
      console.log(answers);
      try {
        const result = await connection.query(
      `INSERT INTO role (title, salary, department_id)
        VALUES ('${answers.title}', '${answers.salary}', '${answers.department}');`) 
        console.log(`'The role ${answers.title} was added successfully'`);
      } catch (err) {
        console.log("catch");
        throw err
      }
      start();
    };
// *************************Add an Employee Logic******************************
const addEmployee = async () => {
    let roles = await connection.query(
    `SELECT title, role.id FROM role;`
    );
    roles = roles.map(row => {
      const rolesActual = { name: row.title, value: row.id } 
      return rolesActual;
    });
    let managers = await connection.query(
      `SELECT employee.id, first_Name, last_Name FROM employee`
    );
    managers = managers.map(each => {
      return `${each.id} ${each.first_Name} ${each.last_Name}`
    });
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'What is the employee\'s first name?'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'What is the employee\'s last name?'
      },
      {
        type: 'list',
        name: 'role_id',
        message: 'Which role does the new employee have?',
        choices: roles
      },
      {
        type: 'list',
        name: 'manager_id',
        message: 'Who is the new employee\'s manager?',
        choices: managers
      }]);
      try {
        const managerId = answers.manager_id[0].split(' ');
        const result = await connection.query(
      `INSERT INTO employee (first_Name, last_Name, role_id, manager_id)
        VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.role_id}', '${managerId[0]}');`) 
        console.log(`'The employee ${answers.firstName} was added successfully'`);
      } catch (err) {
        console.log("catch");
        throw err
      }
  start();
    };
