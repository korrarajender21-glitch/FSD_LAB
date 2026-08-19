// Program to demonstrate EventEmitter in Node.js

import EventEmitter from 'events';

// Create EventEmitter object
const eventEmitter = new EventEmitter();

console.log("===========================================");
console.log("       NODE.JS EVENTEMITTER DEMONSTRATION");
console.log("===========================================\n");

console.log("Welcome to Full Stack Development Laboratory\n");

// Register an event listener
eventEmitter.on('welcome', () => {
    console.log('Event Listener Executed.');
    console.log('Welcome to Event-Driven Programming in Node.js.');
});

// Emit the event
console.log('Event "welcome" has been emitted successfully.\n');

eventEmitter.emit('welcome');

console.log("\nProgram Executed Successfully.");