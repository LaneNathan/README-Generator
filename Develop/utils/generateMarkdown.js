// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function LicenseBadge(license) {
  if(license !== 'None'){
    return `![Static Badge](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function LicenseLink(license) {
  if(license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function LicenseSection(license) {if(license !== 'None') {
  return  `## License

  This project is licensed by ${license}.`;
}
return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
