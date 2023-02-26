import inquirer from "inquirer";

export default async function getDir() {
  const { input } = await inquirer.prompt({
    name: "input",
    message: "Input directory:",
  });
  return input.trim().replace(/\\/gm, "/");
}
