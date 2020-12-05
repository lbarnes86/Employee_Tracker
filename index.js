const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('./config/connection');
//require('console.table');


// Starting inital prompt //
const start = () => {
    inquirer.prompt(
      {
        type: 'list',
        name: 'options',
        message: 'Welcome, please select an item to continue',
        choices:
          [
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'View a Department',
            'View a Role',
            'View an Employee',
            'Update an Employee\'s Role',
            // 'Update an Employee\'s Manager',
            'Delete a Department',
            'Delete a Role',
            'Delete an Employee',
            // 'View Department\'s salary budget',
            'Exit menu'
          ]
      }










