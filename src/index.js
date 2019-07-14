const path = require('path');
const chalk = require('chalk');
const argv = require('yargs').argv;

const write = require('./write');
const defaults = require('./constants');

const projectName = argv._[0] || defaults.PROJECT_NAME;
const projectPathParent = path.resolve(argv._[1] || defaults.PROJECT_PATH);
const projectPath = projectPathParent + '/' + projectName;

console.log(`
${chalk.blue.bold('Preparing bootsrap!')}

Project: ${chalk.green.bold(projectName)}
Destination: ${chalk.green.bold(projectPath)}
`);

write(projectPath, function() {
  console.log(chalk.green.bold('All done! Your canvas bootstrap project is ready.'));
  console.log(`To get started, go to your project directory and open ${chalk.blue.bold('index.html')}.\n`);
  console.log(`${chalk.blue.bold('cd')} ${projectPath}`);
}, function(err) {
  console.log(err);
  console.log(chalk.red.bold('\nBootstrap failed!'));
});
