const students = [
  {
    name: "Igor",
    marks: [8, 10, 7, 5, 4]
  },
  {
    name: "Andrei",
    marks: [2, 4, 10, 9, 4]
  },
  {
    name: "Alexandru",
    marks: [4, 10, 7, 10, 7]
  },
  {
    name: "Ion",
    marks: [5, 10, 2, 5, 10]
  },
  {
    name: "Dumitru",
    marks: [8, 8, 7, 6, 4]
  },
]

//1
students.forEach(student => {
  const average = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
  console.log(`${student.name} - ${average}`);
});

//2
const studentsWithFailingGrades = students.filter(student => {
  const average = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
  return average < 5;
});

console.log("Elevii cu media sub 5: ");
studentsWithFailingGrades.forEach(student => console.log(student.name));
//3

const totalAverage = students.reduce((total, student) => {
  const average = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
  return total + average;
}, 0) / students.length;

const studentsWithHigherThanAverage = students.filter(student => {
  const average = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
  return average > totalAverage;
});

console.log("Elevii cu media mai mare decat media totala: ");
studentsWithHigherThanAverage.forEach(student => console.log(student.name));
