// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
  
    {
        type: 'input',
        name: 'title',
        message: 'What is your repository name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process for your project?',
        default: 'npm i',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Any information you can provide about the usage of the project?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license should your project have?',
        choices: ['MIT','APACHE_2.0','BSL_1.0','CC','None']

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What would you like the user to know about contributing to your repo?',

    },
    {
        type: 'input',
        name: 'test',
        message: 'How should the user run a test in the command line?',
        default: 'npm test',

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    },
    
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) =>{
        console.log('Your README is on the way...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
