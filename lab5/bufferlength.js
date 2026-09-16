// 1. Buffer.from() - Create Buffer
const buffer = Buffer.from("Hello");

console.log("Original Buffer:", buffer);

// 2. toString() - Buffer to String
console.log("String:", buffer.toString());

// 3. length - Find Buffer length
console.log("Buffer Length:", buffer.length);

// 4. Access individual bytes
console.log("First byte:", buffer[0]);
console.log("Second byte:", buffer[1]);

// 5. Modify a Buffer
buffer[0] = 74; // 74 = J
console.log("After modification:", buffer.toString());
// 6. Buffer.alloc() - Create empty Buffer
const buffer2 = Buffer.alloc(5);
console.log("Allocated Buffer:", buffer2);
// 7. Write data into Buffer
buffer2.write("Hello");
console.log("After writing:", buffer2.toString());

// 8. Buffer.concat() - Join two Buffers
const b1 = Buffer.from("Hello ");
const b2 = Buffer.from("World");

const combined = Buffer.concat([b1, b2]);

console.log("Concatenated:", combined.toString());

// 9. slice() - Extract part of Buffer
const sliced = combined.slice(0, 5);

console.log("Sliced Buffer:", sliced.toString());

// 10. subarray() - Extract part of Buffer
const sub = combined.subarray(6, 11);

console.log("Subarray:", sub.toString());

// 11. Buffer.byteLength()
const text = "Hello World";

console.log("Byte Length:", Buffer.byteLength(text));

// 12. Buffer.compare()
const x = Buffer.from("ABC");
const y = Buffer.from("ABC");

console.log("Buffer Compare:", Buffer.compare(x, y));