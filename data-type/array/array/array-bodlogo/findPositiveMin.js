let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];

// Hamgiin baga eyreg toog oloh function bich
function findPositiveMin(arr) {
  let positiveMin = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < positiveMin) {
      positiveMin = arr[i];
    }
  }
  return positiveMin;
}
let resultPositiveMin = findPositiveMin(grades);
console.log("Positive min grade = ", resultPositiveMin);
