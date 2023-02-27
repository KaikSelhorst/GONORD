const chalk = require("chalk");

exports.logCLI = function (dir, theme) {
  const log = console.log;
  const template = `
  =============================
  ✅ ${dir}         ${theme}             
  =============================`;

  log(chalk.green(template));
};
