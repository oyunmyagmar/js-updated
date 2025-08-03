let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];

// Array dotorh buh tegsh toonuudiin dundajiig oloh function bich
function findAverageEven(arr) {
  let evenSum = 0;
  let countEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum = evenSum + arr[i];
      countEven += 1;
    }
  }
  let average = evenSum / countEven;
  return average;
}
let resultAverageEven = findAverageEven(grades);
console.log("Average of even grades = ", resultAverageEven);
