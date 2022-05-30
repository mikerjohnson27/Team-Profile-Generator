//HTML Generation Template File
const gernerateHTML = require('./src/HTMLtemplate.js')
//Express dependency
const express = require('express');
const app = express();
//FS is requires for file generation
const fs = require('fs')

//All awnsers will be pushed here
const teamArray = []

//Questions to add by the type of employee
const typeOfEmployee = {

};


//questions if manager is selected in type of employee questions
const managerQuestions = {

};

//questions if employee is selected in type of employee questions
const employeeQuestions = {

};

//questions if engineer is selected in type of employee questions
const engineerQuestions = {

};