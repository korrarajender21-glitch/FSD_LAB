import fs from "fs";

// Create a Read Stream
const reader = fs.createReadStream("largefile.txt", "utf8");

// Read file chunk by chunk
reader.on("data", (chunk) => {
  console.log("Received Chunk:");
  console.log(chunk);
  console.log("-----------------------");
});

// Reading completed
reader.on("end", () => {
  console.log("File reading completed.");
});

// Handle errors
reader.on("error", (err) => {
  console.log("Error reading file:", err.message);
});
