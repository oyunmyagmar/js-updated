// array of objects
let students = [
  { name: "boldo", age: 20, grade: 20, balance: 500, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 700, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 7000, gender: "male" },
  { name: "zulaa", age: 38, grade: 70, balance: 3500, gender: "female" },
];

// bodlogo 3
// buh suragchdiin dundaj nas oldog function bich
function findAverageAge(arr) {
  let sumAge = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAge = sumAge + arr[i].age;
  }
  let averageAge = sumAge / arr.length;
  return averageAge;
}
let resultAverageAge = findAverageAge(students);
console.log("3. Average age: ", resultAverageAge);
