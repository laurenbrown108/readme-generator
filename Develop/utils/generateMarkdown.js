// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
    ${data.description}

  ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contribution](#Contribution)
    * [Testing](#Testing)
    * [Questions](#Questions)
  
  ## Installation
    ${data.installation}
  
  ## Usage
    ${data.usage}
  
  ## Contribution
    ${data.contributing}
  
  ## Testing
    ${data.test}
  
  ## License
    ![License] ()
  

`;
}

module.exports = generateMarkdown;
