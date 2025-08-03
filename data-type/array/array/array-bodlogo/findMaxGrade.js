let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];

// find max grade
function findMaxGrade(arr) {
  let maxGrade = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxGrade) {
      maxGrade = arr[i];
    }
  }
  return maxGrade;
}
let resultMaxGrade = findMaxGrade(grades);
console.log("Maximum grade = ", resultMaxGrade);
