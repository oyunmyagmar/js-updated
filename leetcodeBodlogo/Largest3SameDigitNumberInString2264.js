let num = "6777133339";

let numArr = num.split("");
// console.log("numArr", numArr);
// console.log(numArr[0]);
let sameDigitArr = [];
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] === numArr[i + 1] || numArr[i] === numArr[i - 1]) {
    sameDigitArr.push(numArr[i]);
  }
}
let max = sameDigitArr[0];
let largest3SameDigitNumber = [];
sameDigitArr.filter((el) => {
  if (max < el) {
    max = el;
    largest3SameDigitNumber.push(el);
  }
});

console.log("sameDigitArr", sameDigitArr);
console.log("largest3SameDigitNumber", largest3SameDigitNumber);
