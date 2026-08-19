// Program to demonstrate Multiple Events using EventEmitter

import EventEmitter from 'events';

// Create EventEmitter object
const eventEmitter = new EventEmitter();

console.log("===========================================");
console.log("   NODE.JS MULTIPLE EVENTS DEMONSTRATION");
console.log("===========================================\n");

console.log("Welcome to Full Stack Development Laboratory\n");

// Register First Event Listener ('register')
eventEmitter.on('register', (username) => {
    console.log(`[Event: register] User '${username}' registered successfully.`);
});

// Register Second Event Listener ('login')
eventEmitter.on('login', (username) => {
    console.log(`[Event: login] User '${username}' logged in successfully.`);
});

// Register Third Event Listener ('logout')
eventEmitter.on('logout', (username) => {
    console.log(`[Event: logout] User '${username}' logged out successfully.`);
});

// Emit Multiple Events
console.log('Triggering multiple events...\n');

eventEmitter.emit('register', 'Alice');
eventEmitter.emit('login', 'Alice');
eventEmitter.emit('logout', 'Alice');

console.log("\nProgram Executed Successfully.");