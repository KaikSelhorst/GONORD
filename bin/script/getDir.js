const inquirer = require("inquirer");
const { normalizeDir } = require("./normalize.js");

exports.getDir = async function () {
  const outputMessage = "Default is input directory";
  let { input, output } = await inquirer.prompt([
    {
      name: "input",
      message: "Input directory:",
    },
    {
      name: "output",
      message: "Output directory:",
      default: outputMessage,
    },
  ]);

  input = normalizeDir(input);
  output = normalizeDir(output);

  // define output = input
  if (output === outputMessage) output = input;

  // To Remove /<img-name>.<extension> for create forder in
  // getDIR.js
  output = output.replace(/([\\\/]*[-_\w]+\.\w+)/gi, "") + "/";

  return {
    input,
    output,
  };
};
