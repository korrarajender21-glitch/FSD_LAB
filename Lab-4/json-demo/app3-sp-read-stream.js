import fs from "fs";

const reader = fs.createReadStream("input.txt", "utf8");

reader.on("data", (chunk) => {
  console.log("Received Data");
  console.log(chunk);
});

reader.on("end", () => {
  console.log("Reading Completed");
});
