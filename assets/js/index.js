//console.log("hello");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
//console.log(generateMarkdown);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the Title of the Project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Write the Description of the Project",
    name: "Description",
  },
  {
    type: "input",
    message: "Describe the tests to install the project",
    name: "Installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
    name: "Usage",
  },
  {
    type: "input",
    message:
      "List your collabrators,if any,with links to their GitHub profiles",
    name: "Credits",
  },
  {
    type: "input",
    message:
      "Provide any tests return for your applications and provide examples.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for the project",
    name: "Licenses",
    choices: [
      "Apache License",
      "MIT License",
      "GNU GPL V3 License",
      "Mozzila",
      "BSD-3-Clause",
    ],
  },
  {
    type: "input",
    message: "Provide your GitHub username",
    name: "Username",
  },
  {
    type: "input",
    message: "Provide an email address",
    name: "email",
  },
];

//   .then((answers) => {
//     console.log(answers);
//     fs.writeFile("README.md", generateMarkdown(answers), (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// function call to initialize program
init();
