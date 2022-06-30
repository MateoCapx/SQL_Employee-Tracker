const inquirer = require("inquirer");
const mySql = require('mysql2');

const arrayData = [];

// return inquirer
const questions = async () => {
    const answers = await inquirer
        .prompt([
           
            {
                type: 'list',
                name: 'role',
                message: 'What Would You Like to Do?',
                choices: ['view all departments', 'view all roles', , 'view all employees', , 'add a department', , 'add a role', , 'add an employee', 'update an employee role',],
            }
        ])
}