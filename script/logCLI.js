import chalk from "chalk";

export default function logCLI(dir, theme) {
  const log = console.log;
  const template = `
  =============================
  ✅ ${dir}         ${theme}             
  =============================`;

  log(chalk.green(template));
}
