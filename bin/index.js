#! /usr/bin/env node
const inquirer = require("inquirer");
const { hello } = require("./script/hello.js");
const { getDir } = require("./script/getDir.js");
const { getTheme } = require("./script/getTheme.js");

const { initSingleFile, initFolder } = require("./script/init.js");

async function main() {
  const initOptions = {
    type: "list",
    name: "mode",
    message: "Select mode: ",
    choices: ["Folder", "Single File"],
  };

  const init = await inquirer.prompt(initOptions);
  const theme = await getTheme();
  const dir = await getDir();
  switch (init.mode) {
    case "Folder":
      initFolder(theme, dir);
      break;
    case "Single File":
      initSingleFile(theme, dir);
      break;
    default:
      console.log("Ending ImageGoNord ...");
      break;
  }
}
hello();
main();
