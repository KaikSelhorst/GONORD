const inquirer = require("inquirer");

exports.getDir = async function () {
  const { input } = await inquirer.prompt({
    name: "input",
    message: "Input directory:",
  });
  return input.trim().replace(/\\/gm, "/");
};
