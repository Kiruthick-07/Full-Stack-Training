const students = [
  { name: "Aklian", marks: [95, 85, 99, 95] },
  { name: "Vkl", marks: [70, 85, 60, 95] },
  { name: "Arun", marks: [90, 92, 88, 70] },
  { name: "Uhan", marks: [50, 60, 45, 70] },
  { name: "Kiruthick", marks: [95, 88, 92, 90] },
];
const studentsWithTotalMarks = students.map((student) => {
  const totalMarks = student.marks.reduce((sum, score) => sum + score, 0);
  return { ...student, totalMarks: totalMarks };
});
console.log("Students with Total Marks:");
console.log(studentsWithTotalMarks);

const highAchievers = studentsWithTotalMarks.filter(
  (student) => student.totalMarks > 200
);
console.log("\nStudents who scored more than 200 marks:");
console.log(highAchievers);
const classTopperMarks = studentsWithTotalMarks.reduce((maxMarks, student) => {
  return student.totalMarks > maxMarks ? student.totalMarks : maxMarks;
}, 0);

console.log("\nClass Topper's Total Marks:");
console.log(classTopperMarks);

const classTopper = studentsWithTotalMarks.find(
  (student) => student.totalMarks === classTopperMarks
);
if (classTopper) {
  console.log(`The class topper is ${classTopper.name} with ${classTopper.totalMarks} marks.`);
}
