let numInput = document.getElementById("num-input");

let allNumBtn = document.getElementById("all-num-btn");
allNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  //   console.log(num);
  //   console.log(typeof num);
  let number = parseInt(num);
  //   console.log(typeof number);

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    console.log(number); //10 9 8 7 6 5 4 3 2 1
    document.getElementById("answer").innerText =
      document.getElementById("answer").innerText + "\n" + number;
    number = number - 1; //9 8 7 6 5 4 3 2 1 0
  }
});

// let too = 10;
// while (too > 0) {
//   console.log(too); //10 9 8 7 6 5 4 3 2 1
//   too = too - 1; //9 8 7 6 5 4 3 2 1 0
// }

let evenNumBtn = document.getElementById("even-num-btn");
evenNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    if (number % 2 === 0) {
      console.log(number);
      document.getElementById("answer").innerText =
        document.getElementById("answer").innerText + "\n" + number;
    }
    number = number - 1;
  }
});

let sumAllNumBtn = document.getElementById("sum-all-num-btn");
sumAllNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let sum = 0;

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    // console.log(number);
    sum = sum + number;
    console.log(sum);
    document.getElementById("answer").innerText = sum;
    number = number - 1;
  }
});

let sumOddNumBtn = document.getElementById("sum-odd-num-btn");
sumOddNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let sum = 0;

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    if (number % 2 === 1) {
      //   console.log(number);
      sum = sum + number;
      console.log(sum);
      document.getElementById("answer").innerText = sum;
    }

    number = number - 1;
  }
});

let timesTableBtn = document.getElementById("times-table-btn");
timesTableBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let i = 1;
  let range = 10;
  let timesTable = "";

  document.getElementById("answer").innerText = "";
  while (range > 0) {
    timesTable = number * i;
    console.log(timesTable);
    document.getElementById("answer").innerText =
      document.getElementById("answer").innerText +
      "\n" +
      number +
      "x" +
      i +
      "=" +
      timesTable;
    range = range - 1;
    i = i + 1;
  }
});

let countDigitBtn = document.getElementById("count-digit-btn");
let firstLastDigitBtn = document.getElementById("first-last-digit-btn");
let sumFirstLastDigitBtn = document.getElementById("sum-first-last-digit-btn");
let swapFirstLastDigitBtn = document.getElementById(
  "swap-first-last-digit-btn"
);
let sumDigitBtn = document.getElementById("sum-digit-btn");
let reverseBtn = document.getElementById("reverse-btn");
let frequencyDigitBtn = document.getElementById("frequency-digit-btn");
let exponentBtn = document.getElementById("exponent-btn");
let factorialBtn = document.getElementById("factorial-btn");
