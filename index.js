//defining constants
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./Develop/utils/generateMarkdown")
// array of questions for user
const questions = [
    {type: "input",
    name: "title",
    message: "Enter a project title."
    },
    {type: "input",
    name: "description",
    message: "Describe your project."
    },
    {type: "input",
    name: "installation",
    message: "Specify any packages that need to be installed to run this project."
    },
    {type: "input",
    name: "usage",
    message: "Specify recommended usage for this project."
    },
    {type: "input",
    name: "contributing",
    message: "Include contribution guidelines for your project."
    },
    {type: "input",
    name: "test",
    message: "Specify how the project is tested."
    },
    {type: "list",
    name: "license",
    message: "Please select a license.",
    choices: [ "MIT", "GPLv2", "Apache"]
    },
    {type: "input",
    name: "github",
    message: "Please enter your github username."
    },
    {type: "input",
    name: "email",
    message: "Please enter your email address."
    }
];
// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answer => {
    writeToFile("NewREADME.md", generateMarkdown(answer))
    })

}

// function call to initialize program
init();
