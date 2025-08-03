let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];

// find min grade
function findMinGrade(arr) {
  let minGrade = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minGrade) {
      minGrade = arr[i];
    }
  }
  return minGrade;
}
let resultMinGrade = findMinGrade(grades);
console.log("Minimum grade = ", resultMinGrade);
