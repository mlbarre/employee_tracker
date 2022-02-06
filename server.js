const inquirer = require('inquirer');
const sequelize = require('sequelize');

const fs = require('fs');

const questions = inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['Add Department', 'Add Role', 'Add Employee', 'Update Employee']
        },
        { 
        // department input
        when: input => {
            (input.choices === 'Add Department');
        },
            type: 'input',
            name: 'newDept',
            message: "What is the name of the new Department?"
        },
        {
        // role input 
            when: input => {
                (input.choices === 'Add Role');
            },
            type: 'input',
            name: 'newRole',
            message: 'What is the name of this new Role?'
        },
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of this role?'
        },
        {
            type: 'input',
            name: 'payRate',
            message: 'What is the salary of this role?'
        },
        {
            when: input => {
                (input.choices === 'Add Employee');
            },
            type: 'input',
            name: 'firstName',
            message: "What is this employee's first name?"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is this employee's last name?"
        },
        {
            type: 'input',
            name: 'role',
            message: "What is this employee's role?"
        }

    ])
