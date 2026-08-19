// EP-2: Node.js program to display process object information

console.log("=========================================");
console.log("       NODE.JS PROCESS OBJECT DEMO");
console.log("=========================================\n");

// Display Node.js version
console.log("Node.js Version:");
console.log(process.version);

// Display current working directory
console.log("\nCurrent Working Directory:");
console.log(process.cwd());

// Display operating system platform
console.log("\nOperating System:");
console.log(process.platform);

// Display command-line arguments
console.log("\nCommand-Line Arguments:");
console.log(process.argv);

console.log("\nProgram Executed Successfully.");