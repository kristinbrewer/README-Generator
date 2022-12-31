// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



///starting new code 
const fs = require('fs');
const inquirer = require('inquirer');

function createREADME(userInfo) {
    let {
        badge,
        projectTitle,
        description,
        installation,
        usage,
        license,
        licenseInfo,
        contributing,
        tests,
        username,
        email,

    } = userInfo;

    if (license === "MIT"){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        licenseInfo = "This application is covered by the MIT license";
    } else if (license === "ISC") {
        badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        licenseInfo = "This application is covered by the ISC license";
    } else {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        licenseInfo = "This application is covered by the Apache 2.0 license";
    }

    //return template for README generation 
    return `# ${projectTitle}

${badge}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}
${licenseInfo}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For more information, my GitHub account is: [${username}](https://${username}) .
Please email me at: ${email} with any additional questions. `;
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


// TODO: Create a function to initialize app
function init() {
    askQuestions()
        .then(createREADME)
        .then(writeFile);
}

// Function call to initialize app
init();