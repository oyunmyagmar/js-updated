let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];

// find positive sum
function findPositiveSum(arr) {
  let positiveSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveSum = positiveSum + arr[i];
    }
  }
  return positiveSum;
}
let resulPositiveSum = findPositiveSum(grades);
console.log("Sum of positive grades = ", resulPositiveSum);
