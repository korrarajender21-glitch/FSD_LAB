import fs from "fs";

const writer = fs.createWriteStream("sample.txt");

writer.write("Node.js Stream Module\n");
writer.write("Learning Read and Write Streams\n");

writer.end();

console.log("Data written successfully.");
