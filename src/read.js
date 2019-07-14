const fs = require('fs');
const path = require('path');

const defaults = require('./constants');

function readTemplate() {
  const html = fs.readFileSync(
    path.join(__dirname, defaults.TEMPLATE.HTML),
    'utf-8'
  );
  const css = fs.readFileSync(
    path.join(__dirname, defaults.TEMPLATE.CSS),
    'utf-8'
  );
  const js = fs.readFileSync(
    path.join(__dirname, defaults.TEMPLATE.JS),
    'utf-8'
  );

  return {
    html,
    css,
    js
  };
}

module.exports = readTemplate();
