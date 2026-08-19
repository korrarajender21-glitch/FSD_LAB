import fs from "fs";

// Read JSON file
fs.readFile("students.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }

  // Convert JSON string into JavaScript array
  const students = JSON.parse(data);

  console.log("Student Details");
  console.log("-----------------------");

  students.forEach((student) => {
    console.log("Roll No :", student.rollNo);
    console.log("Name    :", student.name);
    console.log("Dept    :", student.department);
    console.log("CGPA    :", student.cgpa);
    console.log("-----------------------");
  });
});
