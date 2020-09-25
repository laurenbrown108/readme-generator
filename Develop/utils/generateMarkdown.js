// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=lightgreen)

  ## Description
    
  ${data.description}

  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Testing](#Testing)
  - [Questions](#Questions)
  
  ## Installation
    
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution
  
  ${data.contributing}
  
  ## Testing
    
  ${data.test}
  
  ## License
 
  This project is licensed under the ${data.license} license.
  
  ## Questions

  [Email](mailto:${data.email}) me with any questions & connect with me on [Github](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
