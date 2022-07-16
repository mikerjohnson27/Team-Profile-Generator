//Jest Files
const jest = require('jest')
const Employee_Test = require('./test/Employee.test');
const Intern_Test = require('./test/Intern.test');
const Engineer_Test = require('./test/Engineer.test');
const Manager_Test = require('./test/Manager.test');

//FS and inquirer is requires for file generation
const fs = require('fs');
const inquirer = require('inquirer');
PORT = 3002;

//File Dependencies
const Employee = require('./lib/employee_class.js');
const Manager = require('./lib/manager_class.js');
const Engineer = require('./lib/engineer_class.js');
const Intern = require('./lib/intern_class.js'); 

//All answers will be pushed here
let employeesArray = [];

//Questions to add by the type of employee
const rolepick = [{
        type: "input",
        message: "What the name of the employee?",
        name: getName()
    },{
        type: "input",
        message: 'What is the email of the employee?',
        name: getEmail()
    },{
        type: number,
        message: 'What is the employees ID number?',
        name: getID()
    },{
        type: "list",
        message: 'What is the employees Role?',
        choices: ["Intern",
                "Engineer",
                "Manager"],
        name: employeesArray.getRole()
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
        if (employeeRole.role === Engineer) {
            inquirer.prompt(engineerQuestions).then((engineerArray) => {
                let Engineer = new Engineer(engineerArray.getName(),
                    engineerArray.getID(), engineerArray.getEmail(),
                    engineerArray.github());
                    employeesArray.push(Engineer);
                    addMoreLoop();
            });
        } else if (employeeRole.role === Intern) {
            inquirer.prompt(internQuestions).then((internArray) => {
                let Intern = new Intern(internArray.getName(), 
                    internArray.getID(), internArray.getEmail(),
                    internArray.school());
                    employeesArray.push(Intern);
                    addMoreLoop();
            });
        } else if (employeeRole.role === Manager) {
            inquirer.prompt(managerQuestions).then((managerArray) => {
                let Manager = new Manager(managerArray.getName(), 
                    managerArray.getID(), managerArray.getEmail(), 
                    managerArray.officeNumber());
                    employeesArray.push(Manager);
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
module.exports = HTMLArray;

module.exports = Employee
module.exports = Manager
module.exports = Intern
module.exports = Engineer

module.exports = Employee_Test
module.exports = Manager_Test
module.exports = Intern_Test
module.exports = Engineer_Test