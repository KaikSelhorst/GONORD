const fs = require("node:fs/promises");

const { pythonCLI } = require("./pythonCLI.js");

exports.initSingleFile = function (theme, dir) {
  theme.forEach((t) => pythonCLI(t, dir));
};

exports.initFolder = async function (themes, dir) {
  try {
    const files = await fs.readdir(dir);
    dir += dir.at(-1) === "/" ? "" : "/";

    for (let i = 0; i < files.length; i++) {
      const fileURL = new URL(`${files[i]}`, dir).href;
      await Promise.all(themes.map((theme) => pythonCLI(theme, fileURL)));
    }
  } catch (e) {
    console.log(e);
  }
};
