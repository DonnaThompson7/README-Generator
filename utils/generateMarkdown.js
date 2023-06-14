// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string. 
//Use back ticks here for these
const renderLicenseBadge = license => {
  if (license !== null) {
    switch (license) {
      case "MIT":
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case "GNU GPLv3":
          return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case "Apache License 2.0":
          return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      case "ISC License":
          return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      default:
          return '';
      }
  } else { 
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//This lets other developers know what they can and cannot do with your project. 
//If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
function renderLicenseSection(license) {
    return '';
}

// TODO: Create a function to generate markdown for README. 
//this is where you'll put the markdown syntax
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
