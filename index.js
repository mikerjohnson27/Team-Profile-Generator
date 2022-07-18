//File Dependencies
const Employee = require('../Team-Profile-Generator/lib/employee_class');
const Manager = require('../Team-Profile-Generator/lib/manager_class');
const Engineer = require('../Team-Profile-Generator/lib/engineer_class');
const Intern = require('../Team-Profile-Generator/lib/intern_class');

//Jest Files
const Employee_Test = require("../Team-Profile-Generator/test/Employee.test");
const Intern_Test = require("../Team-Profile-Generator/test/Intern.test");
const Engineer_Test = require("../Team-Profile-Generator/test/Engineer.test");
const Manager_Test = require("../Team-Profile-Generator/test/Manager.test");

//FS and inquirer is requires for file generation
const fs = require('fs');
const inquirer = require('inquirer');
PORT = 3002;

//All answers will be pushed here
let employeesArray = [];

//Questions to add by the type of employee
const rolepick = [{
        type: "list",
        message: 'What is the employees Role?',
        choices: ["Intern",
                "Engineer",
                "Manager"],
        name: employeesArray.Employee.getRole(rolepick.value)
    }];

const internQuestions = [{
        type: 'input',
        message: 'Enter where the Intern is going to School.',
        name: employeesArray.Employee.Intern.getSchool(internQuestions.input.value),
    },{
        type: "input",
        message: "What the name of the Intern?",
        name: employeesArray.Employee.Intern.getName(internQuestions.input.value),
    },{
        type: "input",
        message: 'What is the email of the Intern?',
        name: employeesArray.Employee.Intern.getEmail(internQuestions.input.value),
    },{
        type: number,
        message: 'What is the Intern ID number?',
        name: employeesArray.Employee.Intern.getID(internQuestions.number.value),
    }];
const engineerQuestions = [{
        type: 'input',
        name: employeesArray.Employee.Engineer.getGithub(engineerQuestions.input.value),
        message: 'Enter engineer github username.',
    },{
        type: "input",
        message: "What the name of the engineer?",
        name: employeesArray.Employee.Engineer.getRole(engineerQuestions.input.value),
    },{
        type: "input",
        message: 'What is the email of the engineer?',
        name: engineerQuestions.Employee.Engineer.getEmail(engineerQuestions.input.value),
    },{
        type: number,
        message: 'What is the engineer ID number?',
        name: engineerQuestions.Employee.Engineer.getID(engineerQuestions.number.value),
    }];

const managerQuestions = [{
        type: number,
        message: 'Enter the managers office number.',
        name: employeesArray.Employee.Manager.getOfficeNumber(managerQuestions.number.value),
    },{
        type: "input",
        message: "What the name of the managers?",
        name: employeesArray.Employee.Manager.getName(managerQuestions.input.value),
    },{
        type: "input",
        message: 'What is the email of the managers?',
        name: employeesArray.Employee.Manager.getEmail(managerQuestions.input.value)
    },{
        type: number,
        message: 'What is the managers ID number?',
        name: employeesArray.Employee.Manager.getID(managerQuestions.number.value)
    }];

const addMore = [{
    type: 'list',
    message: 'Would you like to add another employee?',
    choices: ["Yes",
            "No"],
    name: addMore(addMore.list.choices[""].value)

}];

function employeeLoop(Manager, Engineer, Intern) {
    inquirer.prompt(rolepick).then((rolepick) => {
        if (rolepick.role === Engineer) {
            inquirer.prompt(engineerQuestions, managerQuestions).then((engineerQuestions) => {
                let Engineer = new Engineer[
                    engineerArray.getName(managerQuestions.input.value),
                    engineerArray.getID(engineerQuestions.number.value),
                    engineerArray.getEmail(managerQuestions.input.value),
                    engineerArray.Employee.Engineer.getGithub(value)];
                    engineerArray.Employee.Engineer.push(engineerArray.employeesArray);
                    addMore(addMore.value);
            })}else if (employeeRole.role === Intern) {
            inquirer.prompt(internQuestions).then((internQuestions) => {
                let Intern = new Intern[
                    internArray.getName(internQuestions.input.value), 
                    internArray.getID(internQuestions.number.value),
                    internArray.getEmail(internQuestions.input.value),
                    internArray.school(internQuestions.input.value),
                    internArray.Employee.Intern.push(internArray.employeesArray)]
                    addMore(addMore.value);
            })}else if (employeeRole.role === Manager) {
            inquirer.prompt(managerQuestions).then((managerArray) => {
                let Manager = new Manager[
                    managerArray.Employee.Manager.getName(managerQuestions.input.value), 
                    managerArray.Employee.Manager.getID(managerQuestions.input.value),
                    managerArray.Employee.Manager.getEmail(managerQuestions.input.value), 
                    managerArray.Employee.Manager.getID(managerQuestions.number.value)]
                    managerArray.Employee.Manager.push(managerArray.employeesArray)
                    addMoreLoop(addMore(addMore.value))
            })}
        })}

function addMoreLoop(addMore){
    inquirer.prompt(addMore)
    .then((addMore) => {
    if((addMore) === 'Yes'){
        employeeLoop(Employee, Manager, Engineer, Intern)
    }
    if((addMore) === 'No'){
        console.log('thanks for using our app please view you html rendered file')
    }
    })
};
employeeLoop()

module.exports = employeesArray;
module.exports = HTMLArray;

module.exports = Employee
module.exports = Manager
module.exports = Intern
module.exports = Engineer

module.exports = Employee_Test
module.exports = Manager_Test
module.exports = Intern_Test
module.exports = Engineer_Test