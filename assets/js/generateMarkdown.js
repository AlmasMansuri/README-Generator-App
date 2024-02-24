// function to generate markdown for README
function generateMarkdown(answers) {
  let badge = "";
  if (answers.Licenses == "Apache License") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (answers.Licenses == "MIT License") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (answers.Licenses == "GNU GPL V3 License") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (answers == "Mozzila") {
    badge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if ("BSD-3-Clause") {
    badge =
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }

  return `# ${answers.Title}
  
  #License:
  ${badge}
 

  #Table of Contents:
  -[Description] (#Description)
  -[Installation] (#installation)
  -[Usage] (#usage)
  -[Credits] (#credits)
  -[Tests] (#Tests)
  -[License] (#license)
  -[Contact Information] (#Contact Information)

  #Description:
  ${answers.Description}
   
  #Installation:
  ${answers.Installation}
  
  #Usage:
  ${answers.Usage}

  #Credits:
  ${answers.Credits}

  #Tests:
  ${answers.tests}
  
  #License:
  ${answers.Licenses} 

 
  #Github Username:
  ${answers.Username}
  
  #Email:
  ${answers.email}
 
  `;
}

module.exports = generateMarkdown;
