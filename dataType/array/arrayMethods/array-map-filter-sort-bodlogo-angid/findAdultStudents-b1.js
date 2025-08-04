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

// Bodlogo #1
// nasand hursen suragchdiig filterlej oloh function bich
function findAdultStudents(students) {
  let adultStudents = students.filter((student) => {
    return student.age >= 18;
  });
  return adultStudents;
}
const resultAdultStudents = findAdultStudents(data);
console.log(
  "1. Students filtered by an age of 18 and plus: ",
  resultAdultStudents
);
