let employeesArray = require('Team-Profile-Generator/index.js');
let insert = document.getElementById('Insert-Team')

function employeeRole(employeesArray){
    if (employeesArray.role === 'Engineer'){
        document.getElementById(insert).innerHTML
        '<div class="card" style="width: 18rem;">'
        '<div class="card-body">'
        '<h5 class="card-title text-center">Engineer</h5>'
        '<h6 class="card-subtitle mb-2 text-muted">' + {Engineer.github} + '</h6>'
        '<p class="card-text"></p>'
        '</div>'
    }if(employeesArray.role === 'Intern') {
        document.getElementById(insert).innerHTML
        '<div class="card" style="width: 18rem;">'
        '<div class="card-body">'
        '<h5 class="card-title text-center">Intern</h5>'
        '<h6 class="card-subtitle mb-2 text-muted"></h6>'
        '<p class="card-text"></p>'
        '</div>'
    }if(employeesArray.role === 'Manager') {
        document.getElementById(insert).innerHTML
        '<div class="card" style="width: 18rem;">'
        '<div class="card-body">'
        '<h5 class="card-title text-center">Manager</h5>'
        '<h6 class="card-subtitle mb-2 text-muted"></h6>'
        '<p class="card-text"></p>'
        '</div>'
    }else{
        console.log(employeesArray)
        return
    };
};

FileSystem.

employeeRole;
