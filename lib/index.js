const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');
const inquirer = require('inquirer');
const fs = require('fs');
const inquirer = require('inquirer');
const teamMems = [];

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
            renderPage();
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
            teamMems.push(manager);
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
        teamMems.push(intern);
        addMembers();
})
}