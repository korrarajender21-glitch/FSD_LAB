// Alloc method of Buffer
const buffer = Buffer.alloc(20);

buffer.write("NodeJS");

console.log(buffer.toString());

// Concat method
const buffer1 = Buffer.from("Hello ");
const buffer2 = Buffer.from("Students");

const result = Buffer.concat([buffer1, buffer2]);

console.log(result.toString());
