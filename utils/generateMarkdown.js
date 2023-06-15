// Returns a license badge, based on which license is passed in. If no license, return an empty string. 
const renderLicenseBadge = license => {
    switch (license) {
      case "MIT":
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case "GNU GPLv3":
          return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case "Apache License 2.0":
          return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      case "ISC License":
          return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      default:
          return '';
      }
}

// Returns the license link for the table of contents
// If no license, then no entry will be created in the table of contents
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '* [License](#license)'
  } else { 
    return '';
  }
}

// Function that returns the license section of README. If there is no license, do not have a License section
function renderLicenseSection(license) {
    switch (license) {
      case "MIT":
          return `## **License**
Licensed under [The MIT License](https://opensource.org/licenses/MIT).`
      case "GNU GPLv3":
          return `## **License**
Licensed under [GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).`
      case "Apache License 2.0":
          return `## **License**
Licensed under [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).`
      case "ISC License":
          return `## **License**
Licensed under [ISC License (ISC)](https://opensource.org/licenses/ISC).`
      default:
          return '';
      }
  }

// Function that returns the Demo Video section of README. If no screenshot, use placeholder image.
//If no video, do not have a Video Demo section. 
function renderDemoSection(title,screenshot,video) {
  if (!screenshot) {
    screenshot = './assets/images/video_screenshot_placeholder.jpg'
  }
  if (video) {
    return `### **Watch a demo of the ${title}:**
[![demo of the ${title}](${screenshot})](${video})`
  } else {
    return '';
  }
}

// function to generate markdown for README. 
function generateMarkdown(data) {
  return `# **${data.title}**

  ${renderLicenseBadge(data.license)}

  ## **Description**
  ${data.description}

  ## **Table of Contents:**
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)

  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ${renderDemoSection(data.title,data.screenshot,data.video)}

  ## **Contributing**
  ${data.contribution}

  ## **Tests**
  ${data.testSet}

  ${renderLicenseSection(data.license)}

  ## **Questions**
  Please visit my GitHub profile at https://github.com/${data.gitHubUserName} <br /> Contact me at ${data.email} to report issues or if you have additional questions.
`;
}

module.exports = generateMarkdown;
