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
        //tableofContents,
        installation,
        usage,
        license,
        contributing,
        tests,
        username,
        email,

    } = userInfo;
    //return template for README generation 
    return `
    # ${projectTitle}

    ## Description
    ${description}

    ## Table of Contents
    
    - [Description] (#description)
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [License] (#license)
    - [Contributing] (#contributing)
    - [Tests] (#tests)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    For more information, my GitHub account is: ${username} .
    Please email me at: ${email} with any additional questions.  
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
            type: 'input',
        },
        {
            name: 'installation',
            message: 'What are the installation instructions?',
            type: 'input',
        },
        {
            name: 'usage',
            message: 'What is the usage?',
            type: 'input',
        },
        {
            name: 'license',
            message: 'What license would you like to use?',
            type: 'list',
            choices: ["MIT", "ISC", "Apache License 2.0"],
        },
        {
            name: 'contributing',
            message: 'Who is contributing?',
            type: 'input',
        },
        {
            name: 'tests',
            message: 'What tests did you use?',
            type: 'input',
        },
        {
            name: 'username',
            message: 'Please enter your GitHub account:',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Please enter your email address:',
            type: 'input',
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

//badges
//Apache
//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//ISC
//[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//MIT
//[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)



// TODO: Create a function to initialize app
function init() {
    askQuestions()
        .then(createREADME)
        .then(writeFile);
}

// Function call to initialize app
init();