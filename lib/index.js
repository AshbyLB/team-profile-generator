const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');
const inquirer = require('inquirer');
const fs = require('fs');
const teamMems = [];

managerStats();

function addMembers() {
    inquirer.prompt([
        {
        name: 'addTeamMember',
        type: 'rawlist',
        message: 'Please select the typ of team member you would like to add',
        choices: [
            'Intern',
            'Engineer',
            'I do not need to add another team member.'
        ]
        }
    ]).then(function(data){
        if (data.addTeamMember === 'Engineer'){
            engineerStats();
        }else if(data.addTeamMember === 'Intern'){
            internStats();
        }else {
            fs.writeFile('../dist/test.html', renderPage(), (err) => err ? console.log(err) : console.log('test.html Created!'));
        }
    })
}

function managerStats() {
    inquirer.prompt([
        {
         type: 'input',
         message: 'What is the team managers name?', 
         name: 'managersName'  
        },
        {
         type: 'input',
         message: 'What is the team managers employee ID number?', 
         name: 'managersId'  
        },
        {
         type: 'input',
         message: 'What is the team managers email address?', 
         name: 'managersAddr'  
        },
        {
         type: 'input',
         message: 'What is the team managers office number?', 
         name: 'managersOffNum'  
        }       
    ]).then(function(data){
            const manager = new Manager(data.name, data.id, data.email, data.managersOffNum);
            function card(manager) {
                `<div class="card col-3 mt-4 mx-4 pr-0 pl-0 shadow-lg bg-white rounded"
                style="min-width: 18rem; max-width: 18rem">
                <div class="bg-success">
                    <h5 class="card-title ml-2 mt-2">${manager.name}</h5>
                    <h6 class="card-subtitle ml-2 mb-2 "><i class="fas fa-mug-hot"></i>
                        Manager</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${manager.id}</li>
                        <li class="list-group-item"><a href="mailto:${manager.email}">Send email</a></li>
                        <li class="list-group-item">${manager.managersOffNum}</li>
                    </ul>
                </div>
            </div>`
            };
            addMembers();
    })
}

function engineerStats(){
    inquirer.prompt([
        {
         name: 'name',
         message: 'What is the engineers name?',
         type: 'input',
        },
        {
         name: 'id',
         message: 'What is the engineers ID?',
         type: 'input'
        },
        {
         name: 'email',
         message: 'What is the engineers email?',
         type: 'input'
        },
        {
         name: 'gitHub',
         message: 'What is the engineers GitHub profile name?',
         type: 'input'
        }
    ]).then(function(data){
      const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
      teamMems.push(engineer);
      addMembers();
    })
}

function internStats(){
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is the interns name?',
            type: 'input',
           },
           {
            name: 'id',
            message: 'What is the interns ID?',
            type: 'input'
           },
           {
            name: 'email',
            message: 'What is the interns email?',
            type: 'input'
           },
           {
            name: 'school',
            message: 'Where does the intern attend school?',
            type: 'input'
           }
    ]).then(function(data){
        const intern = new Intern(data.name, data.id, data.email, data.school);
        console.log(intern);
        teamMems.push(intern);
        addMembers();
})
}

function renderPage(results){

   return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <title>Document</title>
</head>

<body>
    <header class="jumbotron text-center bg-danger">
        <h1>My Team</h1>
    </header>
    <main class="container d-flex justify-content-center row col-12">
        <div class="card col-3 mt-4 mx-4 pr-0 pl-0 shadow-lg bg-white rounded"
            style="min-width: 18rem; max-width: 18rem">
            <div class="bg-success">
                <h5 class="card-title ml-2 mt-2">Ashby</h5>
                <h6 class="card-subtitle ml-2 mb-2 "><i class="fas fa-mug-hot"></i>
                    Title</h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item"><a href="mailto:">Send email</a></li>
                    <li class="list-group-item">Office Number:</li>
                </ul>
            </div>
        </div>

    </main>

</body>

</html>`;
}
