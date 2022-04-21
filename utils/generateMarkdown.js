// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license, spaceLicense) => {
  return license !== 'None' ? `![License](https://img.shields.io/badge/License-${spaceLicense}-blue.svg)` : ``
}
// a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license, dashLicense) => {
  return license !== 'None' ? `\n [https://opensource.org/licenses/${license}](https://opensource.org/licenses/${dashLicense}) \n` : ``
}

// a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  return license !== 'None' ? `## License
  
  This product is licensed under ${license}` : ``
}

// a function to generate markdown for README
const generateMarkdown = ({title, github, email, description, image, license, install, tests, usage, collab}) => {
  const shortLicense = license.replace(' ', '%20');
  const dashLicense = license.replace(' ', '-');
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
  
  ![Demo](assets/images/${image})
 
  ## Tests

  ${tests}   

  ## Credits
  
  ${collab}

  ## Author

  GitHub: [github.com/${github}](github.com/${github})

  Email: [${email}](${email})
   
  ${renderLicenseSection(license)}
  
  ${renderLicenseBadge(license, shortLicense)}
  ${renderLicenseLink(license, dashLicense)}

`;
}

module.exports = generateMarkdown;
