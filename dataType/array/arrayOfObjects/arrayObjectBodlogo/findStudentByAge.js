// array of objects
let students = [
  { name: "boldo", age: 20, grade: 20, balance: 500, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 7000, gender: "male" },
  { name: "zulaa", age: 38, grade: 70, balance: 3500, gender: "female" },
];

// bodlogo 2
// 2 utga avdag function findStudentByAge(arr,age) gesn function bich
// arr -> dotor array of students baina
// findStudentByAge function age iin utgatai tentsuu nastai neg suragchiig olj butsaana
// jishee: findStudentByAge(student, 30) gj duudahad nadaa 30 nastai neg suragchiig olj ogdog baih
function findStudentByAge(arr, age) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age === age) {
      return arr[i];
    }
  }
  return "Suragch oldsongui";
}
let resultStudentFilteredByAge = findStudentByAge(students, 20);
console.log("Student filtered by AGE: ", resultStudentFilteredByAge);
