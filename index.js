const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'Write a short description of your project',
        name: 'description',
    },
    {
      type: 'input',
      message: 'If you have an image in ./assets/images/, what is its name?',
      name: 'image',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      message: 'What command should I run to install dependencies?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What command should be run for tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What does your user need to know about using the repository?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who contributed to the repository?',
      name: 'collab',
    }
  ])
  .then((response) => {
    fs.writeFile('README.md', generateMarkDown(response),  (err) => 
    (err) ? console.log(err) : console.log('Success!')  
    );
})
.catch((err) => {
    if (err) throw err
});
