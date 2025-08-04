// array of objects
let students = [
  { name: "boldo", age: 20, grade: 20, balance: 500, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 7000, gender: "male" },
  { name: "zulaa", age: 38, grade: 70, balance: 3500, gender: "female" },
];

// student object buh deer balance gsen property nem
// balance dotor toon utga nem
// hamgiin ih balance -tai suragchiig oloh function bich
function findStudentWithMaxBalance(arr) {
  let studentWithMaxBalance = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (studentWithMaxBalance.balance < arr[i].balance) {
      studentWithMaxBalance = arr[i];
    }
  }
  return studentWithMaxBalance;
}
let resultMaxBalance = findStudentWithMaxBalance(students);
console.log("Student with max balance: ", resultMaxBalance);
