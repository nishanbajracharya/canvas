const fs = require('fs');
const chalk = require('chalk');

const templates = require('./template.json');

function write(path, onSuccess, onError) {
  if (fs.existsSync(path)) {
    return onError(
      `Couldn't bootstrap project.\n${chalk.red.bold(
        'Directory already exists.'
      )}`
    );
  }

  const html = path;
  const css = path + '/css';
  const js = path + '/js';

  try {
    console.log(chalk.blue.bold('Creating directories'));
    fs.mkdirSync(html);
    fs.mkdirSync(css);
    fs.mkdirSync(js);
    console.log(chalk.green.bold('Done!\n'));

    console.log(chalk.blue.bold('Creating files'));
    fs.writeFileSync(html + '/index.html', templates.html);
    fs.writeFileSync(css + '/reset.min.css', templates.css);
    fs.writeFileSync(js + '/canvas.js', templates.js);
    console.log(chalk.green.bold('Done!\n'));
  } catch (err) {
    onError(`${chalk.red.bold('An error occured.')}\n${err.message}`);
  }

  onSuccess();
}

module.exports = write;
