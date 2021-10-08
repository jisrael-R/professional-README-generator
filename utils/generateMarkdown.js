
function generateMarkdown(data) {
  return `# ${data.title}
  
  
  ## Licensing:
  [![License](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  
  ## Description:
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation:
  To install the necessary dependencies, run the following command:

    ${data.installation}
  
 
  ## Usage:
  ${data.usage}
  ## License:
 > ${data.license}
  ## Contributing:
  ${data.contribution}
  ## Tests:
  To test application please run:
   
    ${data.tests}
  
  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
 
  #
  
 
  *this file was generated with this project* `;
  
}

module.exports = generateMarkdown;
