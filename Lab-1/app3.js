// EP-3: Node.js application using npm package and global object

import chalk from "chalk";

// Creating a custom message using global object
global.customMessage = "Welcome to Full Stack Development Laboratory";

// Display formatted welcome message using Chalk
console.log(chalk.blue("========================================="));
console.log(chalk.green("        NODE.JS NPM PACKAGE DEMO"));
console.log(chalk.blue("=========================================\n"));

console.log(chalk.yellow("Welcome to Node.js Programming"));
console.log(chalk.cyan(global.customMessage));

console.log(chalk.magenta("\nLearning npm Packages using Chalk"));
console.log(chalk.red("Program Executed Successfully!"));