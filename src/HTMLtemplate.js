
const Employee_Test = require("../Team-Profile-Generator/test/Employee.test");
const Engineer_Test = require("../Team-Profile-Generator/test/Employee.test");
const Intern_Test = require("../Team-Profile-Generator/test/Employee.test");
const Manager_Test = require("../Team-Profile-Generator/test/Employee.test");

//Jest Files
const Employee = require('../lib/employee_class')
const Manager = require('../lib/manager_class');
const Intern = require('../lib/intern_class');
const Engineer = require('../lib/engineer_class');

let employeesArray = require('../index');

const Manager = require('../lib/manager_class');
const Intern = require('../lib/intern_class');
const Engineer = require('../lib/engineer_class');
let insert = require('../dist/index.html')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "src/index.html");

let HTMLArray = []

function HTMLArrayPush (employeesArray, HTMLArray){
    employeesArray.filter(Employee.employeesArray.filter(Manager.employeesArray.filter(Manager)))
    employeesArray.filter(Employee.employeesArray.filter(Engineer.employeesArray.filter(Engineer)))
    employeesArray.filter(Employee.employeesArray.filter(Intern.employeesArray.filter(Intern)))
}

const arrayGenerateHTML = function employeeRole(HTMLArray, ){
    if (employeesArray.role === Engineer){
    let Engineer = `<div class="card">
                <div class="card-header">
                    <h3>${Engineer.getName()}</h3>
                    <h4>Engineer</h4>
                </div>
                <div class="card-body">
                    <p>ID: ${Engineer.getID()}</p>
                    <p>Email:${Engineer.getEmail()}</p>
                    <p>Github:${Engineer.getGithub()}</p>
                </div>
            </div>`
            HTMLArrayPush(HTMLArray)
    }if (employeesArray.role === Intern){
    let Intern = `<div class="card">
                <div class="card-header">
                    <h3>${Intern.getName()}</h3>
                    <h4>Intern</h4>
                </div>
                <div class="card-body">
                    <p>ID: ${Intern.getID()}</p>
                    <p>Email:${Intern.getEmail()}</p>
                    <p>School:${Intern.school()}</p>
                </div>
            </div>`
            .this.Intern.module.exports = HTMLArray
    }if (employeesArray.role === Manager){
    let Manager = `<div class="card">
            <div class="card-header">
                <h3>${Manager.getName()}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p>ID: ${Manager.getID()}</p>
                <p>Email:${Manager.getEmail()}</p>
                <p>Github:${Manager.getOfficeNumber()}</p>
            </div>
        </div>`
        .this.Manager.module.exports = HTMLArray
        }
    fileHTML(HTMLArray);
};
function fileHTML(HTMLArray){ 
    fs.writeFile(HTMLArray, insert)
        modules.exports = HTMLarray.insert
        if(err){
            console.log(err)
            };
    };
arrayGenerateHTML

module.exports = Engineer
module.exports = Manager
module.exports = Intern

module.exports = HTMLArray
module.exports = insert