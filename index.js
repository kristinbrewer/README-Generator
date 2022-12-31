//packages for application 
const fs = require('fs');
const inquirer = require('inquirer');

function createREADME(userInfo) {
    //userinput vars
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
//if statement for license information 
    if (license === "MIT"){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        licenseInfo = "Permission is hearby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED \”AS IS\”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. ";
    } else if (license === "ISC") {
        badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        licenseInfo = "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED \”AS IS\” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.";
    } else {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        licenseInfo = "Licensed under the Apache License, Version 2.0 (the \”License\”); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \”AS IS\” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.";
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
${license} Copyright (c) 2022 ${username}
${licenseInfo}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For more information, my GitHub account is: [${username}](https://github.com/${username}).
Please email me at: ${email} with any additional questions. `;
}
//questions in prompt 
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
            message: 'How do you use your application?',
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
            message: 'Who contributed to this project?',
            type: 'input',
        },
        {
            name: 'tests',
            message: 'What tests did you use?',
            type: 'input',
        },
        {
            name: 'username',
            message: 'Please enter your GitHub user name:',
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


// function to initialize app
function init() {
    askQuestions()
        .then(createREADME)
        .then(writeFile);
}

// Function call to initialize app
init();