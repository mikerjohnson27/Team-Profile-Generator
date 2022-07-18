//File Dependencies
const Employee = require('../Team-Profile-Generator/lib/employee_class');
const Manager = require('../Team-Profile-Generator/lib/manager_class');
const Engineer = require('../Team-Profile-Generator/lib/engineer_class');
const Intern = require('../Team-Profile-Generator/lib/intern_class');

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
        name: internQuestions.type.input = this.Employee.Intern.school
    },{
        type: "input",
        message: "What the name of the Intern?",
        name: input = this.Employee.Intern.name 
    },{
        type: "input",
        message: 'What is the email of the Intern?',
        name: input = this.Employee.Intern.email
    },{
        type: number,
        message: 'What is the Intern ID number?',
        name: number = this.Employee.Intern.id
    }];
const engineerQuestions = [{
        type: 'input',
        message: 'Enter engineer github username.',
        name: input = this.Employee.Engineer.github
    },{
        type: "input",
        message: "What the name of the engineer?",
        name: input = this.Employee.Engineer.name
    },{
        type: "input",
        message: 'What is the email of the engineer?',
        name: input = this.Employee.Engineer.email
    },{
        type: number,
        message: 'What is the engineer ID number?',
        name: number = this.Employee.Engineer.id
    }];

const managerQuestions = [{
        type: number,
        message: 'Enter the managers office number.',
        name: number = this.Employee.Manager.officeNumber
    },{
        type: "input",
        message: "What the name of the managers?",
        name: input = this.Employee.Manager.name
    },{
        type: "input",
        message: 'What is the email of the managers?',
        name: input = this.Employee.Manager.email
    },{
        type: number,
        message: 'What is the managers ID number?',
        name: input = this.Employee.Manager.id
    }];

const addMore = [{
    type: 'list',
    message: 'Would you like to add another employee?',
    choices: ["Yes",
            "No"],
    name: 'addMore'

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