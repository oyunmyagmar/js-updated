// array of numbers
let grades = [10, 20, 30, 100];

// array of strings
let names = ["boldo", "dorjo", "bataa"];
console.log(names[1]);

// array of objects
let students = [
  { name: "boldo", age: 20, grade: 20, balance: 500, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 7000, gender: "male" },
  { name: "zulaa", age: 38, grade: 70, balance: 3500, gender: "female" },
];

// find top grade student
function findTopStudent(arr) {
  let topStudent = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // hervee topStudent grade < arr[i] iin grade ih baivl topStudent -ee solino
    if (topStudent.grade < arr[i].grade) {
      topStudent = arr[i];
    }
  }
  return topStudent;
}
let resultTopStudent = findTopStudent(students);
console.log("Top student:", resultTopStudent);

// "5" == 5 -> tentsene
// 5 === "5" -> tentsehgui
