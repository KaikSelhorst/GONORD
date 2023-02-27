const childProcess = require("node:child_process");
const { normalizeFile } = require("./normalizeFile.js");
const { logCLI } = require("./logCLI.js");

exports.pythonCLI = function (theme, dir) {
  const { name, extention } = normalizeFile(dir);
  return new Promise((resolve) => {
    childProcess.exec(
      `python ./ImageGoNord/src/cli.py --${theme} -i="${dir}" -o="./${name}-${theme}.${extention}"`,
      () => {
        logCLI(name, theme);
        resolve();
      }
    );
  });
};
