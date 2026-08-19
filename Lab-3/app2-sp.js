// Program to demonstrate Callback Functions
console.log("===========================================");
console.log(" CALLBACK FUNCTION DEMONSTRATION");
console.log("===========================================\n");
// Function accepting callback as argument
function performTask(callback) {
 console.log("Task Execution Started...\n");
 console.log("Performing Task...\n");
 // Calling callback function
 callback();
}
// Callback Function
function taskCompleted() {
 console.log("Task Completed Successfully.\n");
 console.log("Callback Function Executed.\n");
}
// Calling function with callback
performTask(taskCompleted);
console.log("Program Execution Finished.");