//FS and inquirer is requires for file generation
const fs = require('fs');
const inquirer = require('inquirer');

//File Dependancies
const Manager = require('./lib/manager_class.js');
const Engineer = require('./lib/engineer_class.js');
const Intern = require('./lib/intern_class.js'); 
const { restoreDefaultPrompts } = require('inquirer');

//All awnsers will be pushed here
const employeesArray = [];

//Questions to add by the type of employee
const rolepick = [{
    type: 'list',
    message: 'What is the employees Role?',
    choices: ["Intern",
            "Engineer",
            "Manager"],
    name: 'role'
}];
const Userinput = [
    {
        type: 'input',
        message: "What the name of the employee?",
        name: 'employeeName'
    },{
        type: 'input',
        message: 'What is the email of the employee?',
        name: 'email'
    },{
        type: 'input',
        message: 'What is the employees ID number?',
        name: 'id'
    }
];
const internQuestions = [{
    type: 'input',
    name: 'school',
    message: 'Enter where the intern is going to School.',
}];
const engineerQuestions = [{
    type: 'input',
    name: 'github',
    message: 'Enter engingeers github username.',
}];
const managerQuestions = [{
    type: 'input',
    name: 'officeNumber',
    message: 'Enter the managers office number.',
}];
function employeeLoop() {
    inquirer.prompt(rolepick)
    prompts.next(Userinput).then((employeeRole) => {
        if (employeeRole.role === 'Engineer') {
            inquirer.prompt(engineerQuestions).then((engineerArray) => {
                let engineer = new Engineer(engineerArray.employeeName,
                    engineerArray.id, engineerArray.email,
                    engineerArray.github);
                    employeesArray.push(engineer);
            });
        } else if (employeeRole.role === 'Intern') {
            inquirer.prompt(internQuestions).then((internArray) => {
                let intern = new Intern(internArray.employeeName, 
                    internArray.id, internArray.email, 
                    internArray.school);
                    employeesArray.push(intern);
            });
        } else if (employeeRole.role === 'Manager') {
            inquirer.prompt(managerQuestions).then((managerArray) => {
                let manager = new Manager(managerArray.employeeName, 
                    managerArray.id, managerArray.email, 
                    managerArray.officeNumber);
                    employeesArray.push(manager);
            });
        }
    });
};