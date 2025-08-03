let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];

// find even sum
function findEvenSum(arr) {
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum = evenSum + arr[i];
    }
  }
  return evenSum;
}
let resultEvenSum = findEvenSum(grades);
console.log("Sum of even grades = ", resultEvenSum);
