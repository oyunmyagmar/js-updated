let students = [
  { name: "boldo", age: 20, grade: 80, balance: 1500, gender: "male" },
  { name: "boldo", age: 40, grade: 40, balance: 150000, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 1000, gender: "male" },
  { name: "zulaa", age: 28, grade: 90, balance: 35000, gender: "female" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 27700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 17000, gender: "male" },
  { name: "zulaa", age: 18, grade: 60, balance: 3500, gender: "female" },
  { name: "zulaa", age: 38, grade: 70, balance: 103500, gender: "female" },
];

// бодлого 6
// эмэгтэй сурагч нийт сурагчийн хэдэн хувь байгааг тооцдог function бич
const calculatePercentageFemaleStudents = (students) => {
  let count = 0;
  for (i = 0; i < students.length; i++) {
    if (students[i].gender === "female") {
      count++;
    }
  }
  return (count / students.length) * 100;
};
const femaleStudentsPercentage = calculatePercentageFemaleStudents(students);
console.log(
  "6. Percentage of female students = ",
  femaleStudentsPercentage,
  "%"
);
