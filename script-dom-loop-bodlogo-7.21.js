// // at class gehdee zuvhun js -iig bichsen html der oruulaagui
// let num1 = document.getElementById("num1");
// // console.log(num1); -> orj irsen esehiig shalgasan
// let num2 = document.getElementById("num2");
// // console.log(num2);

// let plusBtn = document.getElementById("plusBtn");

// plusBtn.addEventListener("click", () => {
//   let number1 = num1.value;
//   let number2 = num2.value;
//   // console.log(number1); -> bichigdej bgag shalgasen
//   // console.log(number2);
//   // console.log(typeof number1); number1 yamar turul -iig shalgasan
//   // console.log(typeof number2);

//   let numberNumber1 = parseInt(number1);
//   let numberNumber2 = parseInt(number2);
//   // console.log(typeof numberNumber1); -> numberNumber1 string -ees number bolson eshiig shalgasan
//   // console.log(typeof numberNumber2);

//   // console.log(numberNumber1 + numberNumber2);
//   // daraagiin alham html answer deer hariugaa gargah
//   // deed taliin console.log -iin orond dood tald bichne
//   // console.log - oo ustgana
//   document.getElementById("answer").innerText = numberNumber1 + numberNumber2;
// });

// let too = 10;
// while (too > 0) {
//   console.log(too); //10 9 8 7 6 5 4 3 2 1
//   too = too - 1; //9 8 7 6 5 4 3 2 1 0
// }

let too = 10;

while (too > 0) {
  if (too % 2 === 0) {
    // console.log(too);
  }
  too = too - 1;
}
// == -> 9 == "9"
// tiimees === taviarai

// 1. 1-ээс n хүртэлх тоонуудыг хэвлэ
let numInput = document.getElementById("num-input");

let allNumBtn = document.getElementById("all-num-btn");
allNumBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);

  document.getElementById("answer").innerText = ""; // answer innertext - iig hoosolj bga
  while (number > 0) {
    // console.log(number); //10 9 8 7 6 5 4 3 2 1
    document.getElementById("answer").innerText =
      document.getElementById("answer").innerText + "\n" + number;
    number = number - 1; //9 8 7 6 5 4 3 2 1 0
  }
});

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
    number = number - 1;
  }
  // console.log(sum);
  document.getElementById("answer").innerText = sum;
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
    }
    number = number - 1;
  }
  // console.log(sum);
  document.getElementById("answer").innerText = sum;
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
  let count = 0;

  document.getElementById("answer").innerText = "";
  while (number >= 1) {
    number = number / 10;
    // console.log(number);
    count = count + 1;
  }
  // console.log(count);
  document.getElementById("answer").innerText = count;
});

// 7. Эхний болон сүүлийн оронг ол
let firstLastDigitBtn = document.getElementById("first-last-digit-btn");
firstLastDigitBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let firstDigit = 0;
  let lastDigit = 0;
  lastDigit = number % 10;

  document.getElementById("answer").innerText = "";
  while (number >= 10) {
    number = number / 10;
  }
  // console.log(number);
  firstDigit = parseInt(number);
  // console.log(firstDigit);
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

  document.getElementById("answer").innerText = "";
  while (number >= 10) {
    number = number / 10;
  }
  firstDigit = parseInt(number);
  // console.log(firstDigit);
  sum = firstDigit + lastDigit;
  // console.log(sum);
  document.getElementById("answer").innerText = sum;
});

// 9. Эхний ба сүүлийн оронг солих програм бич.
let swapFirstLastDigitBtn = document.getElementById(
  "swap-first-last-digit-btn"
);

// 10. Цифрүүдийн нийлбэрийг олох програм бич.
let sumDigitBtn = document.getElementById("sum-digit-btn");
sumDigitBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let digit = 0;
  let sum = 0;

  document.getElementById("answer").innerText = "";
  while (number >= 1) {
    digit = number % 10;
    // console.log(digit);
    sum = sum + digit;
    number = parseInt(number / 10);
  }
  // console.log(sum);
  document.getElementById("answer").innerText = sum;
});

// 11. Тоо урвуу дарааллаар хэвлэх програм бич.(ж: 123 → 321).
let reverseBtn = document.getElementById("reverse-btn");
reverseBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let digit = 0;
  let reverse = 0;

  document.getElementById("answer").innerText = "";
  while (number >= 1) {
    digit = number % 10;
    // console.log(digit);
    reverse = (reverse + digit) * 10;
    number = parseInt(number / 10);
  }
  reverse = reverse / 10;
  // console.log(reverse);
  document.getElementById("answer").innerText = reverse;
});

// 12. Тоо бүрийн давтамжийг тооцох програм бич.
// (ж: 113334 -> 1:2ш,2:0ш,3:3ш,4:1ш,5:0ш...)
let frequencyDigitBtn = document.getElementById("frequency-digit-btn");
frequencyDigitBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let digit = 0;
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;

  while (number >= 1) {
    digit = number % 10;
    number = parseInt(number / 10);
    // console.log(digit);
    if (digit == 0) {
      count0 = count0 + 1;
    } else if (digit == 1) {
      count1 = count1 + 1;
    } else if (digit == 2) {
      count2 = count2 + 1;
    } else if (digit == 3) {
      count3 = count3 + 1;
    } else if (digit == 4) {
      count4 = count4 + 1;
    } else if (digit == 5) {
      count5 = count5 + 1;
    } else if (digit == 6) {
      count6 = count6 + 1;
    } else if (digit == 7) {
      count7 = count7 + 1;
    } else if (digit == 8) {
      count8 = count8 + 1;
    } else if (digit == 9) {
      count9 = count9 + 1;
    }
  }
  document.getElementById("answer").innerText =
    "\n" +
    "0: " +
    count0 +
    "\n" +
    "1: " +
    count1 +
    "\n" +
    "2: " +
    count2 +
    "\n" +
    "3: " +
    count3 +
    "\n" +
    "4: " +
    count4 +
    "\n" +
    "5: " +
    count5 +
    "\n" +
    "6: " +
    count6 +
    "\n" +
    "7: " +
    count7 +
    "\n" +
    "8: " +
    count8 +
    "\n" +
    "9: " +
    count9;
});

// 13. Тооны зэргийг олох програм бич. (ж: Тоо:2, Зэрэг:4, Үр дүн: 16 )
let exponentInput = document.getElementById("exponent-input");
let exponentBtn = document.getElementById("exponent-btn");
exponentBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let exponent = parseInt(exponentInput.value);
  let power = 1;

  document.getElementById("answer").innerText = "";
  while (exponent > 0) {
    power = power * number;
    exponent = exponent - 1;
  }
  // console.log(power);
  document.getElementById("answer").innerText = power;
});

// 14. Факториал олох програм бич.
let factorialBtn = document.getElementById("factorial-btn");
factorialBtn.addEventListener("click", () => {
  let num = numInput.value;
  let number = parseInt(num);
  let factorial = 1;

  document.getElementById("answer").innerText = "";
  while (number >= 1) {
    factorial = factorial * number;
    number = number - 1;
  }
  // console.log(factorial);
  document.getElementById("answer").innerText = factorial;
});

// 15. Хамгийн их ерөнхий хуваагч (HCF) олох програм бич.
let commonDiviserInput = document.getElementById("common-diviser-input");
let btnHCF = document.getElementById("highest-common-factor");

// 16. Хамгийн бага ерөнхий хуваагдагч (LCM) олох програм бич.
let btnLCM = document.getElementById("least-common-multiple");
