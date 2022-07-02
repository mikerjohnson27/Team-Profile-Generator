//Jest Files
// const Intern_Test = require('./test/Intern.test');
// const Engineer_Test = require('./test/Engineer.test');
// const Manager_Test = require('./test/Manager.test');

//FS and inquirer is requires for file generation
const fs = require('fs');
const inquirer = require('inquirer');
PORT = 3002;

//File Dependencies
const Manager = require('./lib/manager_class.js');
const Engineer = require('./lib/engineer_class.js');
const Intern = require('./lib/intern_class.js'); 

//All answers will be pushed here
let employeesArray = [];

//Questions to add by the type of employee
const rolepick = [{
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
    },{
    type: 'list',
    message: 'What is the employees Role?',
    choices: ["Intern",
            "Engineer",
            "Manager"],
    name: 'role'
}];

const internQuestions = [{
    type: 'input',
    name: 'school',
    message: 'Enter where the intern is going to School.',
}];
const engineerQuestions = [{
    type: 'input',
    name: 'github',
    message: 'Enter engineer github username.',
}];
const managerQuestions = [{
    type: 'input',
    name: 'officeNumber',
    message: 'Enter the managers office number.',
}];
const addMore = [{
    type: 'list',
    message: 'Would you like to add another employee?',
    choices: ["Yes",
            "No"],
    name: 'addMore'

}];

function employeeLoop() {
    inquirer.prompt(rolepick).then((employeeRole) => {
        if (employeeRole.role === 'Engineer') {
            inquirer.prompt(engineerQuestions).then((engineerArray) => {
                let engineer = new Engineer(engineerArray.employeeName,
                    engineerArray.id, engineerArray.email,
                    engineerArray.github);
                    employeesArray.push(engineer);
                    addMoreLoop();
            });
        } else if (employeeRole.role === 'Intern') {
            inquirer.prompt(internQuestions).then((internArray) => {
                let intern = new Intern(internArray.employeeName, 
                    internArray.id, internArray.email, 
                    internArray.school);
                    employeesArray.push(intern);
                    addMoreLoop();
            });
        } else if (employeeRole.role === 'Manager') {
            inquirer.prompt(managerQuestions).then((managerArray) => {
                let manager = new Manager(managerArray.employeeName, 
                    managerArray.id, managerArray.email, 
                    managerArray.officeNumber);
                    employeesArray.push(manager);
                    addMoreLoop();
            });
        }
        
    });
};
function addMoreLoop(){
    inquirer.prompt(addMore).then((addMore) =>{
    if(addMore.addMore === 'Yes'){
        employeeLoop()
    }if(addMore.addMore === 'No'){
        console.log('thanks for using our app please view you html rendered file')
    }
    })
};

employeeLoop();

module.exports = employeesArray;