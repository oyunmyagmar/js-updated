// 7.24 -nii array-object bodlogo -> arrow-function -aar bichih const orulan
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

// бодлого 4
// насанд хүрсэн сурагчийн дундаж balance-ийг олдог function бич
const findAvgBalanceAdultStudents = (arr) => {
  let sumBalanceAdults = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      sumBalanceAdults += arr[i].balance;
      count++;
    }
  }
  return sumBalanceAdults / count;
};
const adultStudentsAvgBalance = findAvgBalanceAdultStudents(students);
console.log("4. Average balance of adult students = ", adultStudentsAvgBalance);
