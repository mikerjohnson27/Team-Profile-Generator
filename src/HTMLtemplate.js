let employeesArray = require('../index');
let insert = document.getElementById('Insert-Team')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const arrayGenerateHTML = function employeeRole(){
    if (employeesArray.role === 'Engineer'){
        return `
            <div class="card">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4>
                </div>
                <div class="card-body">
                    <p>ID: ${engineer.id}</p>
                    <p>Email:${engineer.email}</p>
                    <p>Github:${engineer.github}</p>
                </div>
            </div>
        `
    }if (employeesArray.role === 'Intern'){
        return `
            <div class="card">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>Intern</h4>
                </div>
                <div class="card-body">
                    <p>ID: ${intern.id}</p>
                    <p>Email:${intern.email}</p>
                    <p>School:${intern.school}</p>
                </div>
            </div>
        `
    }if (employeesArray.role === 'Manager'){
        return `
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email:${manager.email}</p>
                <p>Github:${manager.officeNumber}</p>
            </div>
        </div>
    `
    }
    fileHTML
};
const fileHTML = generateHTML(employeeArray);
fs.writeFile("main.html", fileHTML, function (err) {
    console.log(err);
})

arrayGenerateHTML