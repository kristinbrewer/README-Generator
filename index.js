// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



///starting new code 
const fs = require('fs');
const inquirer = require('inquirer');

function createREADME(userInfo) {
    const {
        projectTitle,
        description,
        tableofContents,
        installation,
        usage,
        contributing,
        tests,

    } = userInfo;
    //return template literal for README generation 
    return `
    # ${projectTitle}

    ## Description
    ${description}

    ## Table of Contents
    ${tableofContents}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}
  `
}

function askQuestions () {
    return inquirer.prompt( [
        {
          name: 'projectTitle',
          message: 'What is the title of the project?',
          type: 'input',
        },
        {
            name: 'description',
            message: 'Please give a brief description of the project:',
            type: 'editor',
        },
        {
            name: 'installation',
            message: 'What are the installation instructions?',
            type: 'editor',
        },
        {
            name: 'usage',
            message: 'What is the usage?',
            type: 'editor',
        },
        {
            name: 'contributing',
            message: 'Who is contributing?',
            type: 'editor',
        },
        {
            name: 'tests',
            message: 'What tests did you use?',
            type: 'editor',
        },
    ]);
}

function writeFile(md) {
     fs.writeFile('README.md', md, (err) => {
        err 
        ? console.error(err)
        : console.log('done');
     });
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
        .then(createREADME)
        .then(writeFile);
}

// Function call to initialize app
init();