// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license !== 'None' ? `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]` : ''
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license !== 'None' ? `\n [Link](https://opensource.org/licenses/${license}) \n` : ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license !== 'None' ? `## License
  
  This product is licensed under ${license}` : ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, github, email, description, image, license, install, tests, usage, collab }) {
  return `# ${title}

  ## Description
  
  ${description}
  
  ## Table of Contents
      
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ![alt text](assets/images/${image})
 
  ## Tests

  ${tests}   

  ## Credits
  
  ${collab}
  
  ${assets}

  ## Author

  GitHub: [Link](github.com/${github})
  Email: [Link](${email})
   
  ${renderLicenseSection(license)}
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
`;
}

module.exports = generateMarkdown;
