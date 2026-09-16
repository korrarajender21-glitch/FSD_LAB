
const fs=require('fs');
const reader=fs.createReadStream("input.txt");
const writer=fs.createWriteStream("output.txt");
reader.pipe(writer)
console.log("file copied successfully");