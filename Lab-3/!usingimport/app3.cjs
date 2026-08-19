const fs = require('fs').promises;

async function readFileAsync() {
    try {
        console.log("Reading file using Async/Await...");

        const data = await fs.readFile('sample.txt', 'utf8');

        console.log("File Content:");
        console.log(data);
    } catch (err) {
        console.error("Error reading file:", err.message);
    }
}

readFileAsync();