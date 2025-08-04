// new Date() constructor

const d = new Date(2025, 5, 9, 9, 30, 28);
console.log(d);
console.log(".toDateString(): ", d.toDateString());
console.log(".toUTCString(): ", d.toUTCString());
console.log(".toISOString(): ", d.toISOString());

const d1 = new Date("2025-06-09");
console.log("date string :", d1);

const date = new Date();
console.log("current time: ", date);

console.log(".getFullYear(): ", d.getFullYear());
console.log(".getMonth(): ", d.getMonth());
console.log(".getDate(): ", d.getDate());
console.log(".getHours(): ", d.getHours());
console.log(".getUTCHours(): ", d.getUTCHours()); // Coordinated Universal Time
console.log(".getMinutes(): ", d.getMinutes());
console.log(".getSeconds(): ", d.getSeconds());
console.log(".getDay(): ", d.getDay());

const dCourseStarted = new Date(2025, 5, 9);
console.log(dCourseStarted);

const dCourseEnd = dCourseStarted.setDate(dCourseStarted.getDate() + 240 - 11);
console.log(dCourseEnd);

const dLpClassStarted = new Date("2025-08-01");
console.log(dLpClassStarted);

const dLpClassEnd = dLpClassStarted.setDate(dLpClassStarted.getDate() + 240);
console.log(dLpClassEnd);

function calc(ar1, ar2, operationFunction) {
  return operationFunction(ar1, ar2);
}
function addFunction(ar1, ar2) {
  return ar1 + ar2;
}
const result = calc(10, 20, addFunction);
console(result);

// let student {
//     name: "ff",
//     function: ()=>{
//         console.log()
//     }
// }

// class Student {
// name;
// age:
// constru
// }
