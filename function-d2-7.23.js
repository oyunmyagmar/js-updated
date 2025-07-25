// tuhain function-g yamar neg console.log -gui bolgoh
// console.log hevlehgui - geer gargah:

function findSum(a, b) {
  let sum = a + b;
  //   console.log(sum);
  return sum; // yum uguhud butsadag // function heden ch utga avch bolno gehdee 1 l zuil butsana
}
let resultSum = findSum(10, 20); // eniig duudaad nadaa yu uguh yum teriig ni barihad huvisagch taniulad barij avna
console.log(resultSum); // hugjuulelt der console.log-iig bichdeggui
// hugjuuleltiin yavtsad minii code zuv yavj bui esehiig shalgah command
// butegdehun bolgohin yumnu ustgana

function findSum3(a, b, c) {
  let sum = a + b + c;
  return sum;
}
let sumOfThreeNum = findSum3(20, 30, 40);
console.log(sumOfThreeNum);

// olon console.log-oor garch irj bga for loop davtagdaj bui zuiliig butsaah
function getTriangle(size) {
  let result = "";
  for (i = 0; i < size; i++) {
    let stars = "";
    for (j = 0; j <= i; j++) {
      stars += "*";
    }
    // console.log(stars); console.logiin orond doorh mor
    result += stars + "\n";
  }
  return result;
}
let result = getTriangle(5);
console.log("Triangle:");
console.log(result);

// html - tei holboh:
function findSum(a, b) {
  return a + b;
}
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let button = document.getElementById("btn");
let answer1 = document.getElementById("answer");

function buttonClick() {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let sum = num1 + num2;
  answer1.innerText = sum;
}
button.addEventListener("click", buttonClick);
// function-g tusdaa gargaj bga ni ner uguh bolomjtoi bolj bga, dahin dahin ashiglaj bolno

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

// 1. Square Star Pattern -------- urgeljluleh endess
function getSquare(size) {
  let resultStar1 = "";
  for (i = 0; i < size; i++) {
    let stars = "";
    for (j = 0; j < size; j++) {
      stars += "*";
    }
    // console.log(stars);
    resultStar1 += stars + "\n";
  }
  return resultStar1;
}
let resultOfStar1;
resultOfStar1 = getSquare(5);
console.log(resultOfStar1);

// 2. Hollow Square Star Pattern
function getHollowSquare(size) {
  let resultStar2 = "";
  for (i = 0; i < size; i++) {
    let star = "";
    for (j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        star += "*";
      } else {
        star += " ";
      }
    }
    // console.log(star);
    resultStar2 += star + "\n";
  }
  return resultStar2;
}
let resultOfStar2 = getHollowSquare(5);
console.log(resultOfStar2);
