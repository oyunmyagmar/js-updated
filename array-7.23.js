// string ""
// number
// boolean
// undefined
// null
// NaN
// object {}
// array []

let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];
// let shalgalt1 = -20;
// let shalgalt2 = -10;
// let shalgalt3 = 50;
// let shalgalt4 = 25;
// let shalgalt5 = 45;
console.log(grades[3]); // 0 -ees ehelj bgaa uchir 4 deh too ni console.log der garna
// let sum = grades[0] + grades[1] + grades[2] + grades[3];
// let average = sum / 4;
// deed hesgiig niiluulj bichvel doorh bolno
// let average = (grades[0] + grades[1] + grades[2] + grades[3]) / 4;
// ( ) ene haaltnii umnu ner ugvul function bolno -> anhaarah heregtei
// console.log(average);

// find average
function findAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
let resultAverage = findAvg(grades);
console.log("Average grade =", resultAverage);

// find sum
function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let resultSum = findSum(grades);
console.log("Sum of grades =", resultSum);

// find even sum
function findSumEven(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
let resultSumEven = findSumEven(grades);
console.log("Sum of even grades =", resultSumEven);

// find positive sum
function findSumPositive(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
let resultSumPositive = findSumPositive(grades);
console.log("Sum of positive grades =", resultSumPositive);

// find min grade
function findMinGrade(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let minGrade = findMinGrade(grades);
console.log("Minimum grade =", minGrade);

// find max grade
function findMaxGrade(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maxGrade = findMaxGrade(grades);
console.log("Maximum grade =", maxGrade);

// Hamgiin baga eyreg toog oloh function bich
function findMinPositive(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < min) {
      min = arr[i];
      //   if (arr[i] < min) {
      //     min = arr[i];
      //   }
    }
  }
  return min;
}
let minPositive = findMinPositive(grades);
console.log("Minimum positive grade =", minPositive);

// Array dotorh buh tegsh toonuudiin dundajiig oloh function bich
function findAverageEven(arr) {
  let sum = 0;
  let j = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
      j += 1;
    }
  }
  let average = sum / j;
  return average;
}
let resultAverageEven = findAverageEven(grades);
console.log("Average of even grades =", resultAverageEven);
