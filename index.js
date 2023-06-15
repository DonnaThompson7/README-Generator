// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: function to initialize app
function init() {
    // TODO: Create an array of questions for user input
    inquirer
    .prompt([
     {
      type: 'input',         
      message: 'Please enter the title of your project:',     
      name: 'title', 
     },
     {
        type: 'input',         
        message: 'Please enter the description of your project:',      
        name: 'description', 
     },
     {
        type: 'input',         
        message: 'Please enter installation instructions:',     
        name: 'installation', 
     },
     {
        type: 'input',         
        message: 'Please enter usage information:',      
        name: 'usage', 
     },
     {
        type: 'input',         
        message: 'Please enter contribution guidelines:',     
        name: 'contribution', 
     },
     {
        type: 'input',         
        message: 'Please enter test instructions:',      
        name: 'testSet', 
     },
     {
        type: 'list',         
        message: 'Please select the license for your application from the list:',      
        name: 'license',         
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "ISC License", "None"],    
     },
     {
        type: 'input',         
        message: 'Please enter your GitHub username:',     
        name: 'gitHubUserName', 
     },
     {
        type: 'input',         
        message: 'Please enter your email address:',      
        name: 'email', 
     },
    
    ])
    .then((response) => {
        console.log(response);

        //call function in generateMarkdown.js to create content of README.md file by applying markdown to answers above
        const fileData = generateMarkdown(response);
        console.log(fileData);

        //pass file data to write function, which create the README file
        writeToFile('README.md', fileData);
    });
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log('README created successfully!'))
}

// Function call to initialize app
init();
