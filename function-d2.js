// console.log hevlehgui - geer gargah:

function findSum(a, b) {
  let sum = a + b;
  //   console.log(sum);
  return sum;
}
let result;
result = findSum(10, 20);
console.log(result);

// 3. Эерэг, сөрөг эсвэл тэг эсэхийг шалга
function findNegativePositiveZero(a) {
  if (a == 0) {
    console.log("zero");
  } else if (a < 0) {
    console.log("negative number");
  } else if (a > 0) {
    console.log("positive number");
  }
  return a;
}
let result3;
result3 = findNegativePositiveZero(-90);
console.log(result3);
// findNegativePositiveZero(0);

// 1. Square Star Pattern -  --------- urgeljluleh endess
function findGetSquare(size) {
  let resultStar1 = "";
  for (i = 0; i < size; i++) {
    let stars = "";
    for (j = 0; j < size; j++) {
      stars += "*";
    }
    console.log(stars);
    resultStar1 += stars;
    return resultStar1;
  }
  console.log(resultStar1);
}
let resultStar1;
resultStar1 = findGetSquare(5);
console.log(resultStar1);
// findGetSquare(5);

// html - tei holboh:

let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let button = document.getElementById("btn");
let answer1 = document.getElementById("answer");
// console.log(num1Input);

function buttonClick() {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  //   console.log(num1);
  //   console.log(num2);
  let sum = num1 + num2;
  answer1.innerText = sum;
}
button.addEventListener("click", buttonClick);
