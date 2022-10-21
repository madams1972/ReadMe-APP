// array of questions for user
let inquirer = require("inquirer");
let fs = require("fs");
let generate = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    message: "Enter your ReadMe's Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description of your ReadMe:",
    name: "description",
  },
  {
    type: "input",
    message: "Instructions for your ReadMe",
    name: "instructions",
  },
  {
    type: "input",
    message: "Updates to your ReadMe (if none hit enter)",
    name: "updates",
  },
  {
    type: "input",
    message: "Author",
    name: "author",
  },
  {
    type: "input",
    message: "Contributors (if none hit enter)",
    name: "contributors",
  },
  {
    type: "input",
    message: "Future Goals",
    name: "future",
  },
  {
    type: "input",
    message: "License",
    name: "license",
  },
  {
    type: "input",
    message: "Link to deployed site:",
    name: "SiteLink",
  },
  {
    type: "input",
    message: "Link to Github Repo:",
    name: "GithubRepo",
  },
];

// function to write README file
inquirer.prompt(questions).then(function (data) {
  fs.writeFile("README.md", generate(data), function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
});

// function to initialize program
function init() {}

// function call to initialize program
init();
