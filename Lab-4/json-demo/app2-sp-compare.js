// Program for Compare method
const buffer1 = Buffer.from("ABC");
const buffer2 = Buffer.from("XYZ");

const value = buffer1.compare(buffer2);

if (value < 0) {
  console.log("Buffer1 comes before Buffer2");
} else if (value > 0) {
  console.log("Buffer1 comes after Buffer2");
} else {
  console.log("Both are equal");
}
