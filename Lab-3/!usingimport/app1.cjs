const fs = require('fs');

// Read file asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }

    console.log("File Content:");
    console.log(data);
});

console.log("Reading file asynchronously...");