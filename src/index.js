const path = require('path');
const chalk = require('chalk');
const argv = require('yargs').argv;

const defaults = require('./constants');

const projectName = argv._[0] || defaults.PROJECT_NAME;
const projectPathParent = path.resolve(argv._[1] || defaults.PROJECT_PATH);
const projectPath = projectPathParent + '/' + projectName;

console.log(`
${chalk.blue.bold('Preparing bootsrap!')}

Project: ${chalk.green.bold(projectName)}
Destination: ${chalk.green.bold(projectPath)}
`);