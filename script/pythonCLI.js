import childProcess from "node:child_process";
import normalizeFile from "./normalizeFile.js";
import logCLI from "./logCLI.js";

export default function pythonCLI(theme, dir) {
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
}
