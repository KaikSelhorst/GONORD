import chalk from "chalk";

export default function hello() {
  const log = console.log;
  const template = `
  ==================
        WELCOME   
  ==================
  
  My GitHub: @kaikselhorst
  Github IGN: https://github.com/Schrodinger-Hat/ImageGoNord
  `;

  log(chalk.blue(template));
}
