//HTML Generation Template File
const gernerateHTML = require('./src/HTMLtemplate.js')

//Express dependency
const express = require('express');
const app = express();

//FS and inquirer is requires for file generation
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');

//File Dependancies
const Manager = require('./lib/Manager_class');
const Engineer = require('./lib/Engineer_class');
const Intern = require('./lib/Intern_class'); 
const Employee = require('./lib/Employee_class');

//All awnsers will be pushed here
const teamArray = []

//Questions to add by the type of employee
const typeOfEmployee = [{
        type: 'input',
        message: "What the name of the employee?",
        name: 'name'
    },{
        type: 'input',
        message: 'What is the email of the employee?',
        name: 'email'
    },{
        type: 'input',
        message: 'What is the employees ID number?',
        name: 'id'
    },{
        type: 'list',
        message: 'What is the employees ID number?',
        name: 'role',
        choices: [
            "Intern",
            "Employee",
            "Intern",
            "Manager"
          ],
    }
];

//questions if employee is selected in type of employee questions
const employeeQuestions = () => {

};

//questions if manager is selected in type of employee questions
const managerQuestions = () => {

};

//questions if employee is selected in type of employee questions
const internQuestions = () => {

};

//questions if engineer is selected in type of employee questions
const engineerQuestions = () => {

};