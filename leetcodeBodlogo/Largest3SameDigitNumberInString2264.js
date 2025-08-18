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
sameDigitArr.sort((a, b) => {
  return b - a;
});

sameDigitArr.slice();
console.log("sameDigitArr", sameDigitArr);
// console.log("largestSameDigitNumber", largestSameDigitNumber);
