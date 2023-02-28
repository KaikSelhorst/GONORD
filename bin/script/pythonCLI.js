const childProcess = require("node:child_process");
const path = require("node:path");
const fs = require("fs");
const { logCLI } = require("./logCLI.js");

const CLIPATH = path.join(__dirname, "../../ImageGoNord", "src", "cli.py");

exports.pythonCLI = function (theme, dir, filePath) {
  const { name, ext } = path.parse(filePath);

  if (!fs.existsSync(dir.output + name)) fs.mkdirSync(dir.output + name);

  return new Promise((resolve) => {
    childProcess.exec(
      `python ${CLIPATH} --${theme} -i="${filePath}" -o="${dir.output}/${name}/${name}-${theme}${ext}"`,
      (e) => {
        logCLI(name, theme);
        resolve();
      }
    );
  });
};
