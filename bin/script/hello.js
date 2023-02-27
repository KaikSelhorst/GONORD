const chalk = require("chalk");

exports.hello = function () {
  const log = console.log;
  const template = `
  ==================
        WELCOME   
  ==================
  
  My GitHub: @kaikselhorst
  Github IGN: https://github.com/Schrodinger-Hat/ImageGoNord

  Suport Img: ${chalk.red("PNG")}, ${chalk.red("JPEG")}, ${chalk.red("JPG")}
  `;

  log(chalk.blue(template));
};
