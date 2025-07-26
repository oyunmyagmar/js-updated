// command var -iig ashiglahgui yavah // let bolon var scope -iin yalgatai
// const - react deer ashiglagdana // uurchlugduj boldoggui huvisagchiig

// console.log() ni hugjuulelt hiih yavtsad minii huvisagch yamar bolj huvirch ve gedgiig harah zorilgotoi
// tiimd function dotor console.log() bichih ni utgagui
// console.log() -doj ur dungee harah zorilgotoi

function sayHello() {
  return "Hello World";
}
console.log(sayHello());

let sayHello1 = () => {
  return "Hello World 1";
};
console.log(sayHello1());

let age = () => {
  return 16;
};
console.log(age());

const sayHello2 = () => {
  return "Hello World 2";
};
console.log(sayHello2());

// object - array bodlogo let -iig const -aar bichih
let students = [
  { name: "boldo", age: 20, grade: 80, balance: 500, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10000, gender: "male" },
  { name: "zulaa", age: 28, grade: 90, balance: 3500, gender: "female" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 7000, gender: "male" },
  { name: "zulaa", age: 18, grade: 60, balance: 3500, gender: "female" },
  { name: "zulaa", age: 38, grade: 70, balance: 3500, gender: "female" },
];

// бодлого 3
// бүх сурагчдийн дундаж нас олдог function бич
const findAgeAvg = (students) => {
  let sum = 0;
  for (i = 0; i < students.length; i++) {
    sum = sum + students[i].age;
  }
  let average = sum / students.length;
  return average;
};
let averageAge = findAgeAvg(students);
console.log("Average age of students:", averageAge);

let animals = [
  { leg: 4, name: "dog ", height: 10 },
  { leg: 2, name: "chicken ", height: 10 },
  { leg: 4, name: "cat ", height: 123 },
  { leg: 2, name: "kangaroo ", height: 145 },
];

// find 4 legged animals
// const find4LeggedAnimals = (aasd) => {
//   let filteredAnimals = [];
//   let count = 0;
//   for (i = 0; i < aasd.length; i++) {
//     if (aasd[i].leg === 4) {
//       filteredAnimals[count] = aasd[i];
//       count++;
//     }
//   }
//   return filteredAnimals;
// };
// const filteredAnimals = find4LeggedAnimals(animals);
// console.log(filteredAnimals);

// after finding 4 legged animals, object -iin attribute-ees leg -iig has
const find4LeggedAnimals = (aasd) => {
  let filteredAnimals = [];
  let count = 0;
  for (i = 0; i < aasd.length; i++) {
    if (aasd[i].leg === 4) {
      filteredAnimals[count] = {
        name: aasd[i].name,
        height: aasd[i].height,
      };
      count++;
    }
  }
  return filteredAnimals;
};
const filteredAnimals = find4LeggedAnimals(animals);
console.log(filteredAnimals);

// bodlogo 1
// ugugsgun suragchdiin jagsaaltaas hamgiin baga onootoi suragchiig olj butsaadag function bich
const findMinGradeStudent = (arr) => {
  let minGradeStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (minGradeStudent.grade > arr[i].grade) {
      minGradeStudent = arr[i];
    }
  }
  return minGradeStudent;
};
const resultMinGrade = findMinGradeStudent(students);
console.log("Student with min grade", resultMinGrade);

// bodlogo 2
// nas ni 18-aas doosh buh suragchdiig shine massiv (array) bolgon yalgaj butsaadag function bich
const findMinorStudent = (students) => {
  let filteredMinorStudent = [];
  console.log(students);
  let count = 0;
  for (i = 0; i < students.length; i++) {
    if (students[i].age < 18) {
      filteredMinorStudent[count] = students[i];
      count++;
    }
  }
  return filteredMinorStudent;
};
const filteredMinorStudent = findMinorStudent(students);
console.log(filteredMinorStudent);

// bodlogo 3
// buh suragchdiin niit onoonii niilberiig butsaadag function bich
const findSumGradeOfAllStudent = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].grade;
  }
  return sum;
};
const sumOfGrade = findSumGradeOfAllStudent(students);
console.log(sumOfGrade);

// bodlogo 4
// ugugdsun nertei (name) buh suragchdiig butsaadag function bich
// jishee ni: findStudentsByName(students, "boldo")
const findStudentsByName = (students, name) => {
  let filteredStudentsByName = [];
  let count = 0;
  for (i = 0; i < students.length; i++) {
    if (students[i].name == name) {
      filteredStudentsByName[count] = students[i];
      count++;
    }
  }
  return filteredStudentsByName;
};
const filteredStudent = findStudentsByName(students, "zulaa");
console.log(filteredStudent);

// bodlogo 5
// buh suragchdiig onoonii daraalalaar ihees baga-ruu erembeldeg function bich (sort ashiglah)
const sortStudentsByGrade = (students) => {
  let sortedStudentsByGrade = [];
  let count = 0;
  for (i = 0; i < students.length; i++) {
    students[i].grade.sort(function (a, b) {
      return a - b;
    });
    sortStudentsByGrade[count] = students[i];
  }
};
const sortedSudents = sortStudentsByGrade(students);
console.log(sortedSudents);

// bodlogo 6
// balance ni 10000-aas ih suragchdiig richStudents gj nerleed, zuvhun ner bolon balance-iin medeelelteigeer shine massiv (array) uusgej butsaa
