let employeesArray = require('Team-Profile-Generator/index.js');
let insert = document.getElementById('Insert-Team')

const generateHTML = function employeeRole(employeesArray){
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
                    <p>School:${intern.github}</p>
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
                <p>Github:${manager.github}</p>
            </div>
        </div>
    `
    };
};

