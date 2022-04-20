const generateMarkDown = (title, description, install, screenshot, collab, assets, license   ) => {
    `# ${title}

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
    
    
        ![alt text](assets/images/${screenshot})
  
    
    ## Credits
    
    ${collab}
    
    ${assets}
     
    ## License
    
    ${license}
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    [shields.io](https://shields.io/). 
    
    ## Features
    
    If your project has a lot of features, list them here.
    
    ## How to Contribute
    
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    `
}