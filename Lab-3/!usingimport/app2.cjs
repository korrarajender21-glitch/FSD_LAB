const fs = require('fs').promises;

fs.readFile('sample.txt', 'utf8')
    .then((data) => {
        console.log("File Content:");
        console.log(data);
    })
    .catch((err) => {
        console.error("Error reading file:", err.message);
    });

console.log("Reading file using Promises...");