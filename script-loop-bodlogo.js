// 1. 1-ээс n хүртэлх тоонуудыг хэвлэ
let numInput = document.getElementById("num-input");
let exponentInput = document.getElementById("exponent-input");

let allNumBtn = document.getElementById("all-num-btn");
allNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  // console.log(num);
  // console.log(typeof num);
  let number = parseInt(num);
  // console.log(typeof number);

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    // console.log(number); //10 9 8 7 6 5 4 3 2 1
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

//2. 1-ээс n хүртэлх тэгш тоог хэвлэ
let evenNumBtn = document.getElementById("even-num-btn");
evenNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    if (number % 2 === 0) {
      // console.log(number);
      document.getElementById("answer").innerText =
        document.getElementById("answer").innerText + "\n" + number;
    }
    number = number - 1;
  }
});

// 3. 1-ээс n хүртэлх тоонуудын нийлбэрийг ол
let sumAllNumBtn = document.getElementById("sum-all-num-btn");
sumAllNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let sum = 0;

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    // console.log(number);
    sum = sum + number;
    // console.log(sum);
    document.getElementById("answer").innerText = sum;
    number = number - 1;
  }
});

// 4. 1-ээс n хүртэлх сондгой тоонуудын нийлбэрийг ол.
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
      // console.log(sum);
      document.getElementById("answer").innerText = sum;
    }
    number = number - 1;
  }
});

// 5. n тооны үржвэрийн хүрд хэвлэ
// ж: input:5 1x5=5 2x5=10 3x5=15 4x5=20 5x5=25 6x5=30 7x5=35 8x5=40 9x5=45
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
    // console.log(timesTable);
    document.getElementById("answer").innerText =
      document.getElementById("answer").innerText +
      "\n" +
      number +
      "x" +
      i +
      "=" +
      timesTable;
    i = i + 1;
    range = range - 1;
  }
});

// 6. Тоо хэдэн оронтойг тоолох програм бич.
let countDigitBtn = document.getElementById("count-digit-btn");
countDigitBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let i = 0;

  document.getElementById("answer").innerText = "";
  while (number > 0) {
    number = number / 10;
    i = i + 1;
    number = number - 1;
  }
  // console.log(i);
  document.getElementById("answer").innerText = i;
});

// 7. Эхний болон сүүлийн оронг ол
let firstLastDigitBtn = document.getElementById("first-last-digit-btn");
firstLastDigitBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let firstDigit = 0;
  let lastDigit = 0;
  lastDigit = number % 10;
  // console.log("Last digit: " + lastDigit);

  document.getElementById("answer").innerText = "";
  while (number > 10) {
    number = number / 10;
    firstDigit = parseInt(number);
  }
  // console.log("First digit: " + firstDigit);
  document.getElementById("answer").innerText =
    document.getElementById("answer").innerText +
    "\n" +
    "First digit: " +
    firstDigit +
    "\n" +
    "Last digit: " +
    lastDigit;
});

// 8. Эхний ба сүүлийн оронгийн нийлбэрийг ол
let sumFirstLastDigitBtn = document.getElementById("sum-first-last-digit-btn");
sumFirstLastDigitBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let firstDigit = 0;
  let lastDigit = 0;
  let sum = 0;
  lastDigit = number % 10;

  while (number > 10) {
    number = number / 10;
    firstDigit = parseInt(number);
  }
  sum = firstDigit + lastDigit;
  // console.log(sum);
  document.getElementById("answer").innerText = sum;
});

// 9. Эхний ба сүүлийн оронг солих програм бич.
let swapFirstLastDigitBtn = document.getElementById(
  "swap-first-last-digit-btn"
);

// 10. Цифэрүүдийн нийлбэрийг олох програм бич.
let sumDigitBtn = document.getElementById("sum-digit-btn");
sumDigitBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let digit = 0;
  let sum = 0;

  while (number >= 1) {
    digit = number % 10;
    number = parseInt(number / 10);
    // console.log(digit);
    sum = sum + digit;
    // console.log(sum);
    document.getElementById("answer").innerText = sum;
  }
});

// 11. Тоо урвуу дарааллаар хэвлэх програм бич.(ж: 123 → 321).
let reverseBtn = document.getElementById("reverse-btn");

// 12. Тоо бүрийн давтамжийг тооцох програм бич.
// (ж: 113334 -> 1:2ш,2:0ш,3:3ш,4:1ш,5:0ш...)
let frequencyDigitBtn = document.getElementById("frequency-digit-btn");

// 13. Тооны зэргийг олох програм бич. (ж: Тоо:2, Зэрэг:4, Үр дүн: 16 )
let exponentBtn = document.getElementById("exponent-btn");

// 14. Факториал олох програм бич.
let factorialBtn = document.getElementById("factorial-btn");

// 15. Хамгийн их ерөнхий хуваагч (HCF) олох програм бич.
let btnHCF = document.getElementById("highest-common-factor");

// 16. Хамгийн бага ерөнхий хуваагдагч (LCM) олох програм бич.
let btnLCM = document.getElementById("least-common-multiple");
