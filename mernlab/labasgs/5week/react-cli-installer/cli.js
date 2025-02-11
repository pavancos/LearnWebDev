#!/usr/bin/env node

const { execSync } = require("child_process");
const inquirer = require("inquirer");
const chalk = require("chalk");

async function createReactApp() {
  console.log(chalk.blue("\nReact CLI Installer\n"));

  const { appName } = await inquirer.prompt([
    {
      type: "input",
      name: "appName",
      message: "Enter your project name:",
      default: "styledreactapp",
    },
  ]);

  console.log(chalk.green(`\nCreating React app: ${appName}...\n`));
  execSync(`npx create-react-app ${appName} --legacy-peer-deps`, { stdio: "inherit" });

  console.log(chalk.green("\nInstalling dependencies...\n"));
  execSync(`cd ${appName} && npm uninstall react react-dom`, { stdio: "inherit" });
  execSync(`cd ${appName} && npm install react@18 react-dom@18`, { stdio: "inherit" });
  execSync(`cd ${appName} && npm install`, { stdio: "inherit" });

  console.log(chalk.green("\nInstalling Webpack and Web Vitals...\n"));
  execSync(`cd ${appName} && npm install webpack web-vitals`, { stdio: "inherit" });

  console.log(chalk.yellow("\nSetup completed! To start the app, run:\n"));
  console.log(chalk.cyan(`cd ${appName} && npm run start\n`));
}

createReactApp();
