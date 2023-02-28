const childProcess = require("node:child_process");
const fs = require("fs");

const { normalizeFile } = require("./normalize.js");
const { logCLI } = require("./logCLI.js");

exports.pythonCLI = function (theme, dir, filePath) {
  const { name, extention } = normalizeFile(filePath);

  if (!fs.existsSync(dir.output + name)) {
    fs.mkdirSync(dir.output + name);
  }

  return new Promise((resolve) => {
    childProcess.exec(
      `python ./ImageGoNord/src/cli.py --${theme} -i="${filePath}" -o="${dir.output}/${name}/${name}-${theme}.${extention}"`,
      () => {
        logCLI(name, theme);
        resolve();
      }
    );
  });
};
