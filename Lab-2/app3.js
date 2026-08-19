// Program to demonstrate EventEmitter, Timers, and Callback Functions

import EventEmitter from 'events';

// Create EventEmitter object
const eventEmitter = new EventEmitter();

console.log("=================================================");
console.log(" NODE.JS EVENTEMITTER, TIMERS & CALLBACKS");
console.log("=================================================\n");

console.log("Welcome to Full Stack Development Laboratory\n");

// Define a Callback Function
function handleTaskCompletion() {
    console.log("\n[Callback Executed]: 3-second timer finished.");
    // Emit an event after the timer completes
    eventEmitter.emit('taskFinished', 'Full Stack Lab Task');
}

// Register Event Listener for the custom event
eventEmitter.on('taskFinished', (taskName) => {
    console.log(`[Event Triggered]: '${taskName}' has been processed successfully.`);
    console.log("Welcome to Event-Driven Programming in Node.js.");
    console.log("\nProgram Completed Successfully.");
});

// Start Process
console.log("Process Started...");
console.log("Setting a timer for 3 seconds to trigger callback and event...");

// Use a Timer (setTimeout) that invokes the callback function
setTimeout(handleTaskCompletion, 3000);