// Program to demonstrate listeners and custom events

import EventEmitter from 'events';

// Create EventEmitter object
const eventEmitter = new EventEmitter();

console.log("===========================================");
console.log("       NODE.JS CUSTOM EVENTS DEMONSTRATION");
console.log("===========================================\n");

console.log("Welcome to Full Stack Development Laboratory\n");

// First Listener
eventEmitter.on("studentLogin", (name) => {
    console.log("Student Login Event Triggered");
    console.log("Student Name :", name, "\n");
});

// Second Listener
eventEmitter.on("studentLogin", () => {
    console.log("Attendance Marked Successfully.");
    console.log("Welcome to Full Stack Development Laboratory.\n");
});

// Emit Custom Event
eventEmitter.emit("studentLogin", "Rahul");

console.log("Program Executed Successfully.");