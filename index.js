//FS and inquirer is requires for file generation
const fs = require('fs');
const inquirer = require('inquirer');

//File Dependancies
const Manager = require('./lib/manager_class.js');
const Engineer = require('./lib/engineer_class.js');
const Intern = require('./lib/intern_class.js'); 
const Employee = require('./lib/employee_class.js');

//All awnsers will be pushed here

//Questions to add by the type of employee
inquirer.prompt([
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
    },{
        type: 'list',
        message: 'What is the employees ID number?',
        name: 'role',
        choices: [
            "Intern",
            "Employee",
            "Engineer",
            "Manager"
          ]
    },{
        type: 'input',
        name: 'school',
        message: 'Enter where the intern is going to School.',
        when: (input) => input.role === 'Intern'
    },{
        type: 'input',
        name: 'github',
        message: 'Enter engingeers github username.',
        when: (input) => input.role === 'Engineer'
    },{
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the managers office number.',
        when: (input) => input.role === 'Manager'
    }])
.then(function({employeeName, id, email, role, github, school, officeNumber}){;
    if(role === 'Engineer') {
        let Engineer = new Engineer (employeeName, id, email, github);
        console.log(Engineer);
    }else if(role === 'Intern'){
        let Intern = new Intern (employeeName, id, email, school);
        console.log(Intern);
    }else if(role === 'Manager'){
        let Manager = new Manager (employeeName, id, email, officeNumber);
        console.log(Manager);
    }else if(role === 'Employee'){
        let Employee = new Employee (employeeName, id, email);
        console.log(Employee);
    }
});