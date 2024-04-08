// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  
    {
        type: 'input',
        name: 'repo title',
        message: 'What is your repository name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'What is the installation process for your project?',

    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Any information you can provide about the usage of the project?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license should your project have?',
        choices: ['MIT','APACHE 2.0','BSL 1.0','CC','None']

    },
    {
        type: 'input',
        name: 'contribution guidleines',
        message: 'What would you like the user to know about contributing to your repo?',

    },
    {
        type: 'input',
        name: 'test',
        message: 'How should the user run a test in the command line?',

    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?',

    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your email address?',

    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) =>{
        console.log('Your README is on the way...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
