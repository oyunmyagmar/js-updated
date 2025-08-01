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

// Bodlogo #3
// nasaar ni sortloh function bich

function sortByAge(students) {
  let studentsSortedByAge = students.sort((student2, student1) => {
    return student2.age - student1.age;
  });
  return studentsSortedByAge;
}
const resultStudentsSortedByAge = sortByAge(data);
console.log("3. Students sorted by age: ", resultStudentsSortedByAge);
