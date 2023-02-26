import inquirer from "inquirer";
import hello from "./script/hello.js";
import getDir from "./script/getDir.js";
import getTheme from "./script/getTheme.js";

import { initSingleFile, initFolder } from "./script/init.js";

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
