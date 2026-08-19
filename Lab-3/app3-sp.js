// Program to implement Simple Event Queue
console.log("===========================================");
console.log(" SIMPLE EVENT QUEUE IMPLEMENTATION");
console.log("===========================================\n");
// Creating Event Queue
let eventQueue = [];
// Function to add task
function addTask(task)
{
 eventQueue.push(task);
 console.log("Task Added: " + task);
}
// Function to execute task
function executeTask()
{
 console.log("\nExecuting Tasks...\n");
 while(eventQueue.length > 0)
 {
 let task = eventQueue.shift();
 console.log("Processing: " + task);
 }
 console.log("\nAll Tasks Completed Successfully.");
}
// Adding tasks
addTask("File Reading");
addTask("Database Query");
addTask("API Request");
// Processing queue
executeTask();