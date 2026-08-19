// Create a Buffer
const buffer = Buffer.alloc(50);

// Write text into the Buffer
buffer.write("Welcome to Node.js Buffer");

// Display Buffer contents
console.log("Buffer Contents");
console.log(buffer);

// Convert Buffer into String
console.log("\nString Data");
console.log(buffer.toString());
