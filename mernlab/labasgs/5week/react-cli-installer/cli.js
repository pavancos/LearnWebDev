#!/usr/bin/env node

const { execSync } = require("child_process");
const inquirer = require("inquirer");
const chalk = require("chalk");

async function createReactApp() {
  console.log(chalk.blue("\nCreate React App CLI\n"));

  const { appName } = await inquirer.prompt([
    {
      type: "input",
      name: "appName",
      message: "Enter your project name:",
      default: "new-react-app",
    },
  ]);

  try {
    console.log(chalk.green(`\nCreating React app: ${appName}...\n`));
    execSync(
      `npx create-react-app ${appName} --use-npm --legacy-peer-deps`,
      { stdio: "inherit" }
    );

    process.chdir(appName);

    console.log(chalk.green("\nEnsuring correct React version...\n"));
    execSync("npm install react@18 react-dom@18 --force", { stdio: "inherit" });

    console.log(chalk.yellow("\nSetup completed! To start the app, run:\n"));
    console.log(chalk.cyan(`cd ${appName} && npm start\n`));
  } catch (error) {
    console.error(chalk.red("\nAn error occurred while setting up the project:\n"), error);
  }
}

createReactApp();
