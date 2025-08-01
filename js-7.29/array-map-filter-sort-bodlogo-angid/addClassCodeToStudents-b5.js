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

// Bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students, "3A") => [{name: "boldo, age: 3, grade: 11, gender: "male", balance: 1231, classCode: "3A"},...]

// option 1
function addClassCodeToStudents(students, classCode) {
  let studentsClassCodeAdded = students.map((student) => {
    return {
      ...student,
      classCode: classCode,
    };
  });
  return studentsClassCodeAdded;
}
const resultClassCodeAddedStudents = addClassCodeToStudents(data, "3A");
console.log("5. ClassCode added students: ", resultClassCodeAddedStudents);

// option 2
function addClassCodeToStudents2(students, classCode) {
  let studentsClassCodeAdded = students.map((student) => {
    return {
      name: student.name,
      age: student.age,
      grade: student.grade,
      balance: student.balance,
      gender: student.gender,
      classCode: classCode,
    };
  });
  return studentsClassCodeAdded;
}
const resultClassCodeAddedStudents2 = addClassCodeToStudents2(data, "3A");
console.log("5. ClassCode added students2: ", resultClassCodeAddedStudents2);

// option 3 -> used for loop
function addClassCodeToStudents3(students, classCode) {
  for (let i = 0; i < students.length; i++) {
    students[i].classCode = classCode;
  }
  return students;
}
const resultClassCodeAddedStudents3 = addClassCodeToStudents3(data, "3A");
console.log("5. ClassCode added students3: ", resultClassCodeAddedStudents3);
