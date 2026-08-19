// Program to demonstrate console, process and global objects

console.log("===========================================");
console.log("     NODE.JS GLOBAL OBJECTS DEMONSTRATION");
console.log("===========================================\n");

// Creating a global variable
global.message = "Welcome to Node.js Programming";

console.log("Welcome to Full Stack Development Laboratory\n");

// Display current working directory
console.log("Current Working Directory:");
console.log(process.cwd());

// Display Node.js version
console.log("\nNode.js Version:");
console.log(process.version);

// Display operating system
console.log("\nOperating System:");
console.log(process.platform);

// Display global variable
console.log("\nGlobal Message:");
console.log(global.message);

console.log("\nProgram Executed Successfully.");