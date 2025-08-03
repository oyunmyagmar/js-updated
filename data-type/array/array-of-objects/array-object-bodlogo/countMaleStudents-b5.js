// array of objects
let students = [
  { name: "boldo", age: 20, grade: 20, balance: 500, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 7000, gender: "male" },
  { name: "zulaa", age: 38, grade: 70, balance: 3500, gender: "female" },
];

// bodlogo 5
// buh suragch object deer gender gesen property nem, "male" esvel "female" gesen utga ug
// eregtei suragchdiig tooldog function ug
function countMaleStudents(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      count++;
    }
  }
  return count;
}
let resultMaleStudentsCount = countMaleStudents(students);
console.log("5. Count of male students:", resultMaleStudentsCount);
