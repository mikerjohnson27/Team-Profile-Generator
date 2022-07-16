//Jest Files
const Employee = require('../lib/employee_class')
const Manager = require('../lib/manager_class');
const Intern = require('../lib/intern_class');
const Engineer = require('../lib/engineer_class');

let employeesArray = require('../index');
const Employee = require('../lib/employee_class')
const Manager = require('../lib/manager_class');
const Intern = require('../lib/intern_class');
const Engineer = require('../lib/engineer_class');
let insert = require('../dist/index.html')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "src/index.html");

let HTMLArray = []

const arrayGenerateHTML = function employeeRole(){
    if (employeesArray.role === Engineer){
        return `<div class="card">
                <div class="card-header">
                    <h3>${Engineer.name}</h3>
                    <h4>Engineer</h4>
                </div>
                <div class="card-body">
                    <p>ID: ${Engineer.getID}</p>
                    <p>Email:${Engineer.getEmail}</p>
                    <p>Github:${Engineer.github}</p>
                </div>
            </div>`
            .this.Engineer.module.exports = HTMLArray
    }if (employeesArray.role === Intern){
        return `<div class="card">
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
        return `<div class="card">
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