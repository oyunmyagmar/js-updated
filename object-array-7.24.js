// array of numbers
let grades = [10, 20, 30, 100];

// array of strings
let names = ["boldo", "dorjo", "bataa"];

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
  for (i = 0; i < arr.length; i++) {
    // hervee topStudent grade < arr[i] iin grade ih baivl topStudent -ee solino
    if (topStudent.grade < arr[i].grade) {
      topStudent = arr[i];
    }
  }
  return topStudent;
}
let resultTopStudent = findTopStudent(students);
console.log("Top student:", resultTopStudent);

// find oldest student
function findOldestStudent(arr) {
  let oldestStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (oldestStudent.age < arr[i].age) {
      oldestStudent = arr[i];
    }
  }
  return oldestStudent;
}
let resultOldest = findOldestStudent(students);
console.log("Oldest student:", resultOldest);

// find youngest student
function findYoungestStudent(arr) {
  let youngestStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (youngestStudent.age > arr[i].age) {
      youngestStudent = arr[i];
    }
  }
  return youngestStudent;
}
let resultYoungest = findYoungestStudent(students);
console.log("Youngest student:", resultYoungest);

// student object buh deer balance gsen property nem
// balance dotor toon utga nem
// hamgiin ih balance -tai suragchiig oloh function bich
function findStudentWithMaxBalance(arr) {
  let studentWithMaxBalance = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (studentWithMaxBalance.balance < arr[i].balance) {
      studentWithMaxBalance = arr[i];
    }
  }
  return studentWithMaxBalance;
}
let resultMaxBalance = findStudentWithMaxBalance(students);
console.log("Student with max balance:", resultMaxBalance);

// bodlogo 2
// 2 utga avdag function findStudentByAge(arr,age) gesn function bich
// arr -> dotor array of students baina
// findStudentByAge function age iin utgatai tentsuu nastai neg suragchiig olj butsaana
// jishee: findStudentByAge(student, 30) gj duudahad nadaa 30 nastai neg suragchiig olj ogdog baih
function findStudentByAge(arr, age) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age === age) {
      return arr[i];
    }
  }
  return "Suragch oldsongui";
}
let resultByAge = findStudentByAge(students, 20);
console.log("Student by AGE:", resultByAge);

// findStudentByName function bich
function findStudentByName(arr, name) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      return arr[i];
    }
  }
}
let resultByName = findStudentByName(students, "zulaa");
console.log("Student by NAME:", resultByName);

// bodlogo 3
// buh suragchdiin dundaj nas oldog function bich
function findAverageAge(arr) {
  let sumAge = 0;
  for (i = 0; i < arr.length; i++) {
    sumAge = sumAge + arr[i].age;
  }
  let averageAge = sumAge / arr.length;
  return averageAge;
}
let resultAverageAge = findAverageAge(students);
console.log("Average age:", resultAverageAge);

// bodlogo 4
// nasand hursen suragchdiin dundaj balance -iig oldog function bich
function findAvgBalanceOfAdultStudents(arr) {
  let sumBalanceAdults = 0;
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      sumBalanceAdults += arr[i].balance;
      count++;
    }
  }
  let avgBalanceAdults = sumBalanceAdults / count;
  return avgBalanceAdults;
}
let resultAvgBalanceAdults = findAvgBalanceOfAdultStudents(students);
console.log("Average balance of adult students:", resultAvgBalanceAdults);

// bodlogo 5
// buh suragch object deer gender gesen property nem, "male" esvel "female" gesen utga ug
// eregtei suragchdiig tooldog function ug
function countMaleStudents(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      count++;
    }
  }
  return count;
}
let resultMaleStudentsCount = countMaleStudents(students);
console.log("Count of male students:", resultMaleStudentsCount);

// bodlogo6
// emegtei suragch niit suragchdiin heden huvi baigaag tootsdog function bich
function findPercentageFemaleStudents(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "female") {
      count++;
    }
  }
  let femaleStudentsPercentage = (count / arr.length) * 100;
  return femaleStudentsPercentage;
}
let resultFemaleStudentsPercentage = findPercentageFemaleStudents(students);
console.log(
  "Percentage of female students:",
  resultFemaleStudentsPercentage,
  "%"
);

// "5" == 5;
// 5 === "5";
