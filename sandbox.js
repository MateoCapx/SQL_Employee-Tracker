const inquirer = import("inquirer");
const mySql = require('mysql2');


const questions = async () => {
    const answers = await inquirer
        .prompt([

            {
                type: 'list',
                name: 'role',
                message: 'What Would You Like to Do?',
                choices: ['view all departments', 'view all roles', , 'view all employees', , 'add a department', , 'add a role', , 'add an employee', 'update an employee role',]
            }

        ])

    if (answers.role === 'view all departments') {
        const viewAllDepartments = await inquirer

            .prompt([

                {
                    type: 'input',
                    name: 'Name',
                    message: 'What is the name of your department (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter a department name!');
                            return false;
                        }
                    }
                },

            ])

    }
  
   questions();
} 
