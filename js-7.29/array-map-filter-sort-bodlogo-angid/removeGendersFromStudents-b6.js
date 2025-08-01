let data = [
  { name: "boldo", age: 20, grade: 11, balance: 1500, gender: "male" },
  { name: "boldo", age: 40, grade: 11, balance: 150000, gender: "male" },
  { name: "dorjo", age: 15, grade: 11, balance: 1000, gender: "male" },
  { name: "zulaa", age: 28, grade: 11, balance: 35000, gender: "female" },
  { name: "tsetsgee", age: 30, grade: 11, balance: 27700, gender: "female" },
  { name: "bata", age: 10, grade: 11, balance: 17000, gender: "male" },
  { name: "zulaa", age: 18, grade: 11, balance: 3500, gender: "female" },
  { name: "zulaa", age: 38, grade: 11, balance: 103500, gender: "female" },
];

// bodlogo #6
// removeGenders from student array function bich

// option 1
function removeGendersFromStudents(students) {
  let genderRemovedStudents = students.map((student) => {
    const newStudent = { ...student };
    delete newStudent.gender;
    return newStudent;
  });
  return genderRemovedStudents;
}
const resultGenderRemovedStudents = removeGendersFromStudents(data);
console.log("6. Gender removed students: ", resultGenderRemovedStudents);

// option 2
function removeGendersFromStudents2(students) {
  let genderRemovedStudents = students.map((student) => {
    return {
      name: student.name,
      age: student.age,
      grade: student.grade,
      balance: student.balance,
      classCode: student.classCode,
    };
  });
  return genderRemovedStudents;
}
let resultGenderRemovedStudents2 = removeGendersFromStudents2(data);
console.log("6. Gender removed students2: ", resultGenderRemovedStudents2);
