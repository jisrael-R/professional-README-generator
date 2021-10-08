// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type:'input',
        name:'title',
        message:"what is your project's name? (Rquired)",
        validate: titleInp => {
            if (titleInp){
                return true;
            }else {
                console.log('You must  provide a title to continue');
                return false;
            }
        }
},
 {
     type:'input',
     name:'description',
     message:'Please write a brief description of your project? (Required)',
     validate: descriptionInp =>{
        if (descriptionInp){
            return true;
        }else {
            console.log('You must provide a description!');
            return false;
        }
     }
 },
 {
     type:'input',
     name: 'installation',
     message: 'What command should be run to install dependecies?',
     validate: installInp =>{
         if (installInp){
             return true;
         }else{
             console.log('Please add the steps to the installation process');
             return false;
         }
     }
 },
 {
    type: 'input',
    name: 'usage',
    message: 'What does you user needs to know about using the repo?',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('please include a brief comment on how to use  this project!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'What does the user need to know about contributing to the repo?',
    validate: contributingInput => {
        if (contributingInput) {
            return true;
        } else {
            console.log('please provide a comment!');
            return false;
        }
    }
},
{
    type: 'checkbox',
    name: 'license',
    message: 'What kind license should your project have?',
    choices: ['GNU', 'MIT', 'Apache', 'Rust', 'OpenBSD','WordPress', 'None'],
    validate: licensingInput => {
        if (licensingInput) {
            return true;
        } else {
            console.log('Please, select a license for the project!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'What should be run to run tests?',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {
            console.log('Please comment how to run test on this project!');
            return false;
        }
    }
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err)
            throw err;
            console.log('Success, a README.md file has been generated!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userResponse) =>{
        writeToFile('README.md', generateMarkdown(userResponse));
    });
};

// Function call to initialize app
init();
