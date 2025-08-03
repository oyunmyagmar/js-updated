let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];

// find sum
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let resultSum = findSum(grades);
console.log("Sum of grades = ", resultSum);
