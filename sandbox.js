const { prompt } = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');
// const queryFunctions = require('./queryFunctions');

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




  
// Function that queries the department table and creates a table
function viewDepartment(){
    db.query(`SELECT * FROM Employee_Tracker.department;`, (err,res) =>{
        console.table(res)
    })

}

// Function that queries the department table and creates a table
function viewRole(){
    db.query(`SELECT * FROM Employee_Tracker.role;`, (err,res) =>{
        console.table(res)
    })

}

// Function that queries the department table and creates a table
function viewEmployee(){
    db.query(`SELECT * FROM Employee_Tracker.employee;`, (err,res) =>{
        console.table(res)
    })

}




//Prompted questions that the user will answer.
const questions = async () => {
    const answers = await 
        prompt([

            {
                type: 'list',
                name: 'role',
                message: 'What Would You Like to Do?',
                choices: ['View all departments', 'View all roles', 'View all employees',  'Add a department',  'Add a role',  'Add an employee', 'update an employee role',]
            }

        ])


// IF USER SELECTS VIEW ALL DEPARTEMENTS - QUERY DATABASE TO DISPLAY DEPARTMENTS
    if (answers.role === 'View all departments') {
     viewDepartment();
      questions();
}

// IF USER SELECTS VIEW ALL ROLES - QUERY DATABES TO DISPLAY ROLES 
    if (answers.role === 'View all roles') {
         viewRole();
        questions();
    }

// IF USER SELECTS VIEW ALL EMPLOYEES - QUERY DATABES TO DISPLAY EMPLOYEES 
    if (answers.role === 'View all employees') {
        viewEmployee();
        questions();

    }




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

                
            ]).then(function(res,err){
                db.query(`"INSERT INTO departments SET ?";`)
                    console.table(res)
                    if(err){
                        console.log(err)
                    }
            })
            
        

          
            questions();
            console.log("Added Service To Database")

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