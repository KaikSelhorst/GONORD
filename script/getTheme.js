import inquirer from "inquirer";

export default async function getTheme() {
  const themeOption = {
    type: "checkbox",
    name: "theme",
    message: "Theme for Image",
    choices: [
      "Catppuccin",
      "Challenger",
      "Dracula",
      "Gotham",
      "GruvBox",
      "Molokai",
      "Moonlight",
      "nord",
      "Oceanic",
      "Onedark",
      "Palenight",
      "Serenade",
      "Sonokai",
      "Tokyo",
      "Vaporwave",
      "Vim",
    ],
  };

  const res = await inquirer.prompt(themeOption);

  const theme = res["theme"].length !== 0 ? res["theme"] : ["Nord"];
  return theme;
}
