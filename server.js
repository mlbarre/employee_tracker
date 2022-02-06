const inquirer = require('inquirer');
const sequelize = require('sequelize');
const cTable = require('console.table');
const fs = require('fs');

const db = mysql.createConnection({
    host: "localhost",
    PORT: 3001,
    user: "root",
    password: "0921%mlb",
    database: "office_db",
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Successfully connected!");
});

const questions = inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['Add Department', 'Add Role', 'Add Employee', 'Update Employee'],
            validate(answer) {
                if (!answer) {
                console.log("Please enter a valid choice.");
            }},
        }]).then((answers) => {
        // department input
        if (choices === 'Add Department') {
            addNewDepartment();
        }
        // role input 
        if (choices === 'Add Role') {
            addNewRole();
        } 
        // employee input
        if (choices === 'Add Employee') {
            addNewEmployee();
        }
        if (choices === 'Update Employee') {
            updateEmployeeData();
        };

const addNewEmployee = () => {
    prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is this employee's first name?",
            validate(answer) {
                if (!answer) {
                    console.log("Please enter a valid name.");
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is this employee's last name?",
            validate(answer) {
                if (!answer) {
                    console.log("Please enter a valid name.");
                }
            }
        },
        {
            type: 'input',
            name: 'role',
            message: "What is this employee's role?",
            validate(answer) {
                if (!answer) {
                    console.log("Please enter a valid name.");
                }
            }
        },
        {
            type: 'input',
            name: 'payRate',
            message: 'What is the salary of this employee?',
        },
        ]).then((answer) => {
            let data = [answer.firstName, answer.lastName, answer.payRate];
            const syncSQL = `INSERT INTO employee (first_name, last_name, role_id)
                        VALUES (?,?,?)`;
            connection.query(syncSQL, data, (err) => {
                if (err) throw err;
                console.log('Something went wrong!');
            },
            console.log('Employe was added into the database!');
            }),
        });