// command var -iig ashiglahgui yavah // let bolon var scope -iin yalgatai
// const - react deer ashiglagdana // uurchlugduj boldoggui huvisagchiig

// console.log() ni hugjuulelt hiih yavtsad minii huvisagch yamar bolj huvirch ve gedgiig harah zorilgotoi
// tiimd function dotor console.log() bichih ni utgagui
// console.log() -doj ur dungee harah zorilgotoi

function sayHello() {
  return "Hello World";
}
// huvisagch dotor function bj bolno // function ingej bichih
let sayHello1 = () => {
  return "Hello World 1";
};
// function hezee ch uurchlugduhgui uchir let bish const gj bichne
const sayHello2 = () => {
  return "Hello World 2";
};
console.log(sayHello());
console.log(sayHello1());
console.log(sayHello2());

// age -iin huvid daraa jil gehed uurchlugduh uchraas let -eer yavahad bolno
let age = () => {
  return 16;
};
console.log(age());

// hezee ch uurlugduhgui huvisagch -iig const -aar zarlaj bolno
const PI = 3.14;

// 7.24 -nii object-array bodlogo let -iig const -aar bichih
let students = [
  { name: "boldo", age: 20, grade: 80, balance: 1500, gender: "male" },
  { name: "boldo", age: 40, grade: 40, balance: 150000, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 1000, gender: "male" },
  { name: "zulaa", age: 28, grade: 90, balance: 35000, gender: "female" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 27700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 17000, gender: "male" },
  { name: "zulaa", age: 18, grade: 60, balance: 3500, gender: "female" },
  { name: "zulaa", age: 38, grade: 70, balance: 103500, gender: "female" },
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
// door studentAverageAge variable yagaad const bj boloh ve gvel:
// student age uurchlugduhud ene muriig dahij shineer unshina,
// tegehed dahij ene huvisagch shineer zarlagadad run code hiij bga blohoor
const studentsAverageAge = findAgeAvg(students);
console.log("Average age of students: ", studentsAverageAge);

// бодлого 4
// насанд хүрсэн сурагчийн дундаж balance-ийг олдог function бич
const findAvgBalanceAdultStudents = (arr) => {
  let sumBalanceAdults = 0;
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      sumBalanceAdults += arr[i].balance;
      count++;
    }
  }
  return sumBalanceAdults / count;
};
const adultStudentsAvgBalance = findAvgBalanceAdultStudents(students);
console.log("Average balance of adult students = ", adultStudentsAvgBalance);

// бодлого 5
// бүх сурагч object дээр gender гэсэн property нэм, 'male' эсвэл 'female' гэсэн утга өг
// эрэгтэй сурагчдыг тоолдог function бич
const countMaleStudents = (arr) => {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male") {
      count++;
    }
  }
  return count;
};
const maleStudentsCount = countMaleStudents(students);
// developer -uud nershilees ni haraad daraah baidlaar oilgono
// maleStudentsCount -iig too bn, countMaleStudents -iig function bn gj
console.log("Count of male students: ", maleStudentsCount);

// бодлого 6
// эмэгтэй сурагч нийт сурагчийн хэдэн хувь байгааг тооцдог function бич
const calculatePercentageFemaleStudents = (students) => {
  let count = 0;
  for (i = 0; i < students.length; i++) {
    if (students[i].gender === "female") {
      count++;
    }
  }
  return (count / students.length) * 100;
};
const femaleStudentsPercentage = calculatePercentageFemaleStudents(students);
console.log("Percentage of female students = ", femaleStudentsPercentage, "%");

// 7.25 bodlogo endees ehelj bgaa
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
// const filtered4LeggedAnimals = find4LeggedAnimals(animals);
// console.log(filtered4LeggedAnimals);

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
console.log("4 Legged animals", filteredAnimals);

// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.
const findMinGradeStudent = (arr) => {
  let minGradeStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (minGradeStudent.grade > arr[i].grade) {
      minGradeStudent = arr[i];
    }
  }
  return minGradeStudent;
};
const resultMinGradeStudent = findMinGradeStudent(students);
console.log("Student with min grade: ", resultMinGradeStudent);

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив болгон ялгаж буцаадаг функц бич.
const findMinorStudent = (students) => {
  let filteredMinorStudent = [];
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
console.log("Minor students: ", filteredMinorStudent);

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.
const findSumGradesOfAllStudents = (arr) => {
  let sumOfGrades = 0;
  for (i = 0; i < arr.length; i++) {
    sumOfGrades += arr[i].grade;
  }
  return sumOfGrades;
};
const sumOfGrades = findSumGradesOfAllStudents(students);
console.log("Sum of students's grades = ", sumOfGrades);

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич.
// Жишээ нь: findStudentsByName(students, "boldo").

const findStudentsByName = (students, name) => {
  let filteredStudentsByName = [];
  let count = 0;
  for (i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      filteredStudentsByName[count] = students[i];
      count++;
    }
  }
  return filteredStudentsByName;
};
const filteredStudentsByName = findStudentsByName(students, "zulaa");
console.log("Students filtered by name: ", filteredStudentsByName);

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)
const sortByGradeDescending = (students) => {
  students.sort((a, b) => b.grade - a.grade);
  return students;
};
let sortedStudentsByGrade = sortByGradeDescending(students);
console.log("Students sorted by descending grade: ", sortedStudentsByGrade);

// // Бодлого 5-1 ner -eer ni sortloh // blohgui bga
// const sortByNameAZ = (students) => {
//   students.sort((a, b) => a.name.localCompare(b.name));
//   return students;
// };
// let sortedStudentsByName = sortByNameAZ(students);
// console.log("Students sorted by name: ", sortedStudentsByName);

// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд,
// зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.
const findRichStudents = (arr) => {
  let richStudents = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].balance >= 10000) {
      richStudents[count] = {
        name: arr[i].name,
        balance: arr[i].balance,
      };
      count++;
    }
  }
  return richStudents;
};
const richStudents = findRichStudents(students);
console.log("Rich students: ", richStudents);

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }
const countStudentsByName = (arr) => {
  let nameFrequency = [];
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].name == "boldo") {
      nameFrequency[count] = arr[i];
      count++;
    } else if (arr[i].name == "dorjo") {
      nameFrequency[count] = arr[i];
      count++;
    }
  }
  return count;
};
const studentNameFrequency = countStudentsByName(students);
console.log(studentNameFrequency);

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ: { male: 30, female: 60 }
const findAvgGradeByGender = (arr) => {
  let filteredByFemale = {};
  let sumGradeFemale = 0;
  let sumGradeMale = 0;
  let countFemale = 0;
  let countMale = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender === "female") {
      filteredByFemale[countFemale] = {
        female: arr[i].grade,
      };
      countFemale++;
    }
    return filteredByFemale;
  }
};
const filteredByFemale = findAvgGradeByGender(students);
console.log(filteredByFemale);
