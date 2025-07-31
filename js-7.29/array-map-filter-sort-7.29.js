// Map method
// array-g uuriig ni uurchluhgui
// map neg function avna, tuhain function bas neg utga avna
// // // map method = for loop gj oilgoj bolno <- alban yosnii tod bish
// map method shine array uusgej ugnu, shine array ni huuchin array-tei length ijil bn
// yamar array uusgehee map-iin return -eer shidne
// shine array usgej ugne shine huuchin array length ijil bna

// arr.map((tuhain function avah utga) => {});
// ages.map(()=>{}) function -iig zaaval bichne

console.log("ARRAY-MAP-METHOD");

let ages = [10, 203, 43, 30, 50];

for (i = 0; i < ages.length; i++) {
  console.log("ages[i]", ages[i]);
}
// deerh bichiglel doorh bichigleltei adil
// door orj irj bga a element maani ages[i] buyu array -iin element 1, 1 -eeree orj irj bn
ages.map((a) => {
  console.log(a);
});
// ingej element bolgon deer guij bgag iteration gdeg
// guisen element -ee a gej nerlej bga gehdee uuruur nerlej bolno
// uchir ni function der orj irj bga utgiig function uuruu yu gj nerlej avmaar bn duraaraa nerlej avna

// shine array uusgej bgag let duu -eer barina
let duu = ages.map((a) => {
  console.log(a);
});
console.log(duu); // ene function yu butsana tsuglullad array usged butsagad ugdug

let duu1 = ages.map((a) => {
  return 10; // yamar array uusgehee map-iin return -eer shidne
});
console.log(duu1); // return yu ugnu tuuniig tsuglulad array bolgoj ugnu

let duu2 = ages.map((b) => {
  return 10 * b;
});
console.log(duu2);
// degur ni for loop irged element bolgoniig nadaa gantshan function -ii utga bolgood ugsun
// teruger yaj l bol yaj boloh ged bn

let duu3 = ages.map((b) => {
  return {
    value: 10 * b,
  };
});
console.log(duu3);
// ingej bas bolno

let datas = [
  { name: "boldo", age: 20, grade: 11, balance: 1500, gender: "male" },
  { name: "boldo", age: 40, grade: 11, balance: 150000, gender: "male" },
  { name: "dorjo", age: 15, grade: 11, balance: 1000, gender: "male" },
  { name: "zulaa", age: 28, grade: 11, balance: 35000, gender: "female" },
  { name: "tsetsgee", age: 30, grade: 11, balance: 27700, gender: "female" },
  { name: "bata", age: 10, grade: 11, balance: 17000, gender: "male" },
  { name: "zulaa", age: 18, grade: 11, balance: 3500, gender: "female" },
  { name: "zulaa", age: 38, grade: 11, balance: 103500, gender: "female" },
];

let newStudents = datas.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log("grades-original", datas);
console.log("grades-year after", newStudents);

// filter method
// filter uuriig ni uuurchluhgui
// shine array uusgene ugnu
// filter method neg function avna, tuhain function neg utga avna
// return deer true bh buh element -iig tsugluulaad array butsana

console.log("ARRAY-FILTER-METHOD");

const filteredByEven = ages.filter((age) => {
  return age % 2 === 0;
});
console.log("ages-original", ages);
console.log("ages-filtered even", filteredByEven);

// map ontslog ni yug l butsana tedgeeriig bugdiig ni tsugluulaad array uusged butsaana
// filter arai uur bn
// return ni 1 bol true avna 1 bol false avna
// filter ni age yamar tohioldold true avch bg yum, ter bolgoniig ni tsuglulad butsana
let duu4 = ages.map((age) => {
  return age % 2 === 0;
});
console.log(duu4);

// sort method
// sort method function avna
// avj bga function ni 2 utga orj irne
// return deer + esvel - too butsaana
// sort method ni array -iig uuriig ni uurchilnu
// map bolon filter ni array -iig uuriig ni uurchluhgui

console.log("ARRAY SORT METHOD");

console.log("ages-original", ages);

ages.sort((a, b) => {
  return 1; // heveeree
});
console.log("ages return +1 ued", ages);

ages.sort((a, b) => {
  return -1; // reverse hiisen
});
console.log("ages return -1 ued", ages);

ages.sort((a, b) => {
  console.log("a = ", a);
  console.log("b = ", b);
  return 1;
});
console.log("a bolon b -g hevlehed", ages);

// age 1 -> b age 2 -> a bgad bn
ages.sort((age2, age1) => {
  return age2 - age1;
});
console.log("bagas ni ihruu sortloh", ages);

// Jishee bodlogo angid
// Suragchdiig nasnii erembeer ni sortloh
datas.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log("Students sorted by age order", datas);

// Suragchdiig eregtei emegtei -eer sortloh
datas.sort((student2, student1) => {
  if (student1.gender > student2.gender) {
    return -1;
  } else {
    return 1;
  }
});
console.log("Student sorted by gender", datas);

// Suragchdiig ner -eer sortloh
datas.sort((student2, student1) => {
  if (student1.name > student2.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log("Student sorted by name", datas);

console.log("BODLOGO");

// Bodlogo #1
// nasand hursen suragchdiig filterlej oloh function bich
function findAdultStudents(students) {
  let filtered = students.filter((student) => {
    return student.age >= 18;
  });
  return filtered;
}
const resultAdultStudents = findAdultStudents(datas);
console.log("Students filtered by an age of 18 and plus", resultAdultStudents);

// Bodlogo #2
// // gender ugunguut tuhain gendereer filterlej uguh function bich
// // eg: filterByGender("male") => zuvhun erchudiig yalgaj ugnu

function filterByGender(students, gender) {
  let filtered = students.filter((student) => {
    return student.gender === gender;
  });
  return filtered;
}
const resultStudentsFilteredByGender = filterByGender(datas, "female");
console.log("Students filtered by gender", resultStudentsFilteredByGender);

// Bodlogo #3
// nasaar ni sortloh function bich

function sortByAge(students) {
  let sortedByAge = students.sort((student2, student1) => {
    return student2.age - student1.age;
  });
  return sortedByAge;
}
const resultStudentsSortedByAge = sortByAge(datas);
console.log("Students sorted by age", resultStudentsSortedByAge);

// Bodlogo #4
// neg too ugunguut tuhain toonoos ih balance-tai suragchdiig yalgaj uguh function bich
function filterByBalance(students, balance) {
  let filteredByBalance = students.filter((student) => {
    return student.balance > balance;
  });
  return filteredByBalance;
}
const resultStudentsFilteredByBalance = filterByBalance(datas, 20000);
console.log("Students filtered by balance", resultStudentsFilteredByBalance);

// Bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students, "3A") => [{name: "boldo, age: 3, grade: 11, gender: "male", balance: 1231, classCode: "3A"},...]

// option 1
// function addClassCodeToStudents(students, classCode) {
//   let classCodeFieldadded = data.map((student) => {
//     return {
//       name: student.name,
//       age: student.age,
//       grade: student.grade,
//       balance: student.balance,
//       gender: student.gender,
//       classCode,
//     };
//   });
//   return classCodeFieldadded;
// }
// const resultClassCodeAdded = addClassCodeToStudents(datas, "3A");
// console.log("classCode added", resultClassCodeAdded);

// option 2
// function addClassCodeToStudents(students, classCode) {
//   for (let i = 0; i < students.length; i++) {
//     students[i].classCode = classCode;
//   }
//   return students;
// }
// const resultClassCodeAdded = addClassCodeToStudents(datas, "3A");
// console.log("classCode added", resultClassCodeAdded);

// option 3
function addClassCodeToStudents(students, classCode) {
  let classCodeFieldadded = datas.map((student) => {
    return {
      ...student,
      classCode: classCode,
    };
  });
  return classCodeFieldadded;
}
const resultClassCodeAdded = addClassCodeToStudents(datas, "3A");
console.log("classCode added", resultClassCodeAdded);

// bodlogo #6???????????????????????????????
// removeGenders from student array function bich

// option 1
// function removeGendersFromStudents(students) {
//   let genderFieldRemoved = students.map((student) => {
//     return {
//       name: student.name,
//       age: student.age,
//       grade: student.grade,
//       balance: student.balance,
//       classCode: student.classCode,
//     };
//   });
//   return genderFieldRemoved;
// }
// let resultGenderRemoved = removeGendersFromStudents(datas);
// console.log("gender removed", resultGenderRemoved);

// option 2
function removeGendersFromStudents(students) {
  let genderFieldRemoved = students.map((student) => {
    const newStudent = { ...student };
    delete newStudent.gender;
    return newStudent;
  });
  return genderFieldRemoved;
}
const resultGenderRemoved = removeGendersFromStudents(datas);
console.log("gender removed", resultGenderRemoved);
