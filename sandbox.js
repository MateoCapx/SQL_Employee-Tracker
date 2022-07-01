const { prompt } = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');


// Connect to database - creating a connection to the database.
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Mateo123',
        database: 'Employee_Tracker'
    },
    console.log('Connected to the Employee_Tracker database.')
);
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });




const questions = async () => {
    const answers = await 
        prompt([

            {
                type: 'list',
                name: 'role',
                message: 'What Would You Like to Do?',
                choices: ['View all departments', 'View all roles', , 'View all employees', , 'Add a department', , 'Add a role', , 'Add an employee', 'update an employee role',]
            }

        ])


    if (answers.role === 'View all departments') {
        const viewAllDepartments = await 

            prompt([

                {
                    // console.table([
                    // const db = mysql.createConnection(
                    //     {
                    //         host: 'localhost',
                    //         // Your MySQL username,
                    //         user: 'root',
                    //         // Your MySQL password
                    //         password: 'Mateo123',
                    //         database: 'Employee_Tracker'
                    //     },
                    //     console.log('Connected to the Employee_Tracker database.')
                    // )
                    // db.connect(function(err) {
                    //     if (err) throw err;
                    //     console.log("Connected!");
                    //   });

                    // ]);
                   
                },

            ])
            questions();
    }


    // if (answers.role === 'view all roles') {
    //     const viewAllDepartments = await 

    //         prompt([

    //             {
    //                 type: 'input',
    //                 name: 'Name',
    //                 message: 'What is the name of your department (Required)',
    //                 validate: enterName => {
    //                     if (enterName) {
    //                         return true;
    //                     } else {
    //                         console.log('You need to enter a department name!');
    //                         return false;
    //                     }
    //                 }
    //             },

    //         ])

    // }


    // if (answers.role === 'view all employees') {
    //     const viewAllDepartments = await 

    //         prompt([

    //             {
    //                 type: 'input',
    //                 name: 'Name',
    //                 message: 'What is the name of your department (Required)',
    //                 validate: enterName => {
    //                     if (enterName) {
    //                         return true;
    //                     } else {
    //                         console.log('You need to enter a department name!');
    //                         return false;
    //                     }
    //                 }
    //             },

    //         ])

    // }



    if (answers.role === 'Add a department') {
        const viewAllDepartments = await 

            prompt([

                {
                    type: 'input',
                    name: 'department',
                    message: 'What is the name of the department (Required)',
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
console.log("Added Service To Database")
questions();
    }



    if (answers.role === 'Add a role') {
        const viewAllDepartments = await 

            prompt([

                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title of the role (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter a role name!');
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'What is the salary of the role (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter a role name!');
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'roleDepartment',
                    message: 'Which department does the role belong to?  (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter a department!');
                            return false;
                        }
                    }
                }

            ])
            console.log(`Added ${prompt.role} To the Database`)
            questions();
    }



    if (answers.role === 'Add an employee') {
        const viewAllDepartments = await 

            prompt([

                {
                    type: 'input',
                    name: 'firstName',
                    message: 'What is the employees first name? (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter employees first name name!');
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'lastName',
                    message: 'What is the employees last name? (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter employees last name!');
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'employeeRole',
                    message: 'What is the employees role? (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter employee role!');
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'employeeManager',
                    message: 'Who is the emplyoees manager? (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter employee manager!');
                            return false;
                        }
                    }
                },

            ])
            console.log(`Added ${prompt.firstName , prompt.lastName } To the Database`)
            questions();
    }



    if (answers.role === 'update an employee role') {
        const viewAllDepartments = await 

            prompt([

                {
                    type: 'input',
                    name: 'employeeUpdate',
                    message: 'Which employees role would you like to update? (Required)',
                    validate: enterName => {
                        if (enterName) {
                            return true;
                        } else {
                            console.log('You need to enter an employee you would like to update!');
                            return false;
                        }
                    }
                },

            ])

    }
  
   
} 
questions();