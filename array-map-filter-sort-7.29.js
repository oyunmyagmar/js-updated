// Map method
// array map array-g uuriig ni uurchluhgui
// array map neg function avna, tuhain function bas neg utga avna
// // // map method = for loop gj oilgoj bolno <- alban yosnii tod bish
// map method shine array uusgej ugnu, shine array ni huuchin array-tei ijil length-tei bn
// yamar array uusgehee map-iin return -eer shidne
// shine array usgej ugne shine huuchin array length ijil bna

// arr.map((tuhain function avah utga) => {});

let ages = [10, 203, 43, 30, 50];

let egch = ages.map((a) => {
  // console.log(a);
  return 10;
});
console.log(egch);

let duu = ages.map((a) => {
  // console.log(a);
  return 10 * a;
});
console.log(duu);

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

// let newStudents = students.map((student) => {
//   return {
//     name: student.name,
//     age: student.age,
//     grade: student.grade + 1,
//   };
// });
// console.log(students);
// console.log(newStudents);

// filter method
// filter uuriig ni uuurchluhgui
// shine array uusgene ugnu
// filter method neg function avna, tuhain function neg utga avna
// return deer true bh buh element-iig tsugluulaad array butsana

// console.log("filter method");

// const filteredAges = ages.filter((age) => {
//   return age % 2 === 0;
// });
// console.log(ages);
// console.log(filteredAges);

// map ni yug l butsana tedgeeriig bugdiig ni tsugluulaad butsaana
// let evenAge = ages.map((age) => {
//   return age % 2 === 0;
// });
// console.log(evenAge);

// sort method
// sort method function avna
// avj bga function ni 2 utga orj irne
// return deer + esvel - too butsaana
//
// console.log("sort method");

// ages.sort();
// console.log(ages);

// ages.sort((a, b) => {
//   return 1;
// });
// console.log(ages);

// ages.sort((a, b) => {
//   return -1;
// });
// console.log(ages);

// console.log("bodlogo-uud");

// Bodlogo #1
// nasand hursen suragchdiig filterlej oloh function bich
function findAdultStudents(students) {
  let filtered = students.filter((student) => {
    return student.age >= 18;
  });
  return filtered;
}
const resultAdultStudents = findAdultStudents(data);
console.log(resultAdultStudents);

// Bodlogo #2
// // gender ugunguut tuhain gendereer filterlej uguh function bich
// // eg: filterByGender("male") => zuvhun erchudiig yalgaj ugnu

function filterByGender(students, gender) {
  let filtered = students.filter((student) => {
    return student.gender === gender;
  });
  return filtered;
}
const resultFilteredStudentsByGender = filterByGender(data, "male");
console.log("Filtered students by gender", resultFilteredStudentsByGender);

// Bodlogo #3
// nasaar ni sortloh function bich

// Bodlogo #4
// neg too ugunguut tuhain toonoos ih balance-tai suragchdiig yalgaj uguh function bich
function filterByBalance(students, balance) {
  let filtered = students.filter((student) => {
    return student.balance > balance;
  });
  return filtered;
}
const resultFilteredStudentsByBalance = filterByBalance(data, 20000);
console.log("Filtered students by balance", resultFilteredStudentsByBalance);

// Bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students, "3A") => [{name: "boldo, age: 3, grade: 11, gender: "male", balance: 1231, classCode: "3A"},...]

// function addClassCodeToStudents(students, classCode) {
//   let addedField = data.map((student) => {
//     return {
//       name: student.name,
//       age: student.age,
//       grade: student.grade,
//       balance: student.balance,
//       gender: student.gender,
//       classCode,
//     };
//   });
//   return addedField;
// }
// const resultStudentsClassCodeAdded = addClassCodeToStudents(data, "3A");
// console.log("classCode added", resultStudentsClassCodeAdded);
``;
function addClassCodeToStudents(students, classCode) {
  for (i = 0; i < students.length; i++) {
    students[i].classCode;
  }
  return students;
}
const resultStudentsClassCodeAdded = addClassCodeToStudents(data, "3A");
console.log("classCode added", resultStudentsClassCodeAdded);
