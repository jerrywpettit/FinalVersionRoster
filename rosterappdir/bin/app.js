#!/usr/bin/env node
//version 1.1 this file is a command line interface (CLI) program which collects information about an engineering team.  

const inquirer = require('inquirer');
const fs = require('fs'); 

const collectInputs = async (inputs = []) => {
  const prompts = [
    
    {
      type: 'input',
      name: 'name',
      message: 'Name: '
 
    },

    {
      type: 'list',
      name: 'role',
      message: 'Role: ',
      choices: ['Manager', 'Engineer', 'Employee', 'Intern'], 
     },
    {
      type: 'input',
      name: 'id',
      message: 'ID: '
 
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email: '
 
    },
    {
      type: 'input',
      name: 'github',
      message: 'Github: ',
      when: (answers) => answers.role === 'Engineer',
    },

    {
      type: 'input',
      name: 'office',
      message: 'Office number: ',
      when: (answers) => answers.role === 'Manager',
    },
    {
      type: 'input',
      name: 'college',
      message: 'College: ',
      when: (answers) => answers.role === 'Intern',
    },

    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another input? ',
      default: true
    }
  ];
  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};
 const main = async () => {
 const inputs = await collectInputs();
 var strinputs=JSON.stringify(inputs);
 var adjstrinputs='{"employee":' + strinputs + "}";               //puts the data into a format that will be accepted by the json-server module so we can upload it
 fs.writeFileSync('employee.json',adjstrinputs);    
 console.log("    ");       
 console.log("Now, From terminal: json-server employee.json    From browser: ../rosterappdir/index.html      From terminal: ctrl-c stops server"); 
 console.log("    ");    
 console.log("Optional quick tip: From Windows Command Prompt: startserver    or From Windows PowerShell: ./startserver");       

}
main();
