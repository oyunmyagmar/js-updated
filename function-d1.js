// nasaa ugch yavulahad tursun on hevlej uguh function bich
function findBirthYear(age) {
  let birthYear = 2025 - age;
  console.log(birthYear);
}
findBirthYear(35);

// neree ugch yavuulahad console.log deer "Sain baina uu Erdene" ged
// minii nereer mendchileh function bich
function sayGreeting(name) {
  let greet = "Sain Baina uu! ";
  console.log(greet + name);
}
sayGreeting("Miga");

// 2 bolon tuunees deesh utga avdag funvtion bich
// 3 too ugch yavuulahad 3 toonii niilber oldog function bich
function findSum(a, b, c) {
  let sum = a + b + c;
  console.log(sum);
}
findSum(10, 20, 30);

// 3 too avdag function, console.log der hamgiin bagiig ni hevledeg function bich
function findMin(a, b, c) {
  if (a < b && a < c) {
    console.log(a);
  } else if (b < c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
findMin(100, 200, 300);

// If-Else Бодлогууд

// 1. Хоёр тооны ихийг ол
function findMax(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
findMax(130, 300);

// 2. Гурван тооны ихийг ол
function findMax3(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
findMax3(100, 240, 30);

// 3. Эерэг, сөрөг эсвэл тэг эсэхийг шалга
function findPositiveNegativeZero(a) {
  if (a == 0) {
    console.log("zero");
  } else if (a > 0) {
    console.log("positive number");
  } else if (a < 0) {
    console.log("negative number");
  }
}
findPositiveNegativeZero(0);

// 4. Тоо 3 болон 5-д зэрэг, аль нэгэнд эсвэл аль алинд нь хуваагдах эсэхийг шалга.
function findDividedBy3or5(a) {
  if (a % 15 == 0) {
    console.log("divided by 3 and 5");
  } else if (a % 3 == 0) {
    console.log("divided by only 3");
  } else if (a % 5 == 0) {
    console.log("divided by only 5");
  } else if (a % 15 !== 0 || a % 3 !== 0 || a % 5 !== 0)
    console.log("divided neither of 3 and 5");
}
findDividedBy3or5(45);

// 5. (Leap Year) Хэрэглэгчийн оруулсан он өндөр жил мөн эсэхийг шалгах код бич.
function findLeapYear(a) {
  if (a % 4 == 0 || a % 400 == 0) {
    if (a % 100 == 0) {
      console.log(a + " is not a Leap Year");
    }
    console.log(a + " is a Leap Year");
  } else {
    console.log(a + " is not a Leap Year");
  }
}
findLeapYear(2600);
// asuuh !!!!!!!!!!!!!!!!!!!!!!!

// 6. Долоо хоногийн өдрийг хэвлэх
// 1-7 гэсэн тоо оруулаад тухайн тоонд харгалзах долоо хоногийн өдрийг хэвлэнэ.
// Жишээ нь: 1 гэж оруулхад Даваа гэж хэвлэнэ
function findDay(daynumber) {
  if (daynumber == 1) {
    console.log("Monday");
  } else if (daynumber == 2) {
    console.log("Tuesday");
  } else if (daynumber == 3) {
    console.log("Wednesday");
  } else if (daynumber == 4) {
    console.log("Thursday");
  } else if (daynumber == 5) {
    console.log("Friday");
  } else if (daynumber == 6) {
    console.log("Saturday");
  } else if (daynumber == 7) {
    console.log("Sunday");
  }
}
findDay(3);

// 7. Ашиг/алдагдал тооцоолох
// Барааны өртөг болон борлуулалтын үнийг оруулаад ашигтай, алдагдалтай эсвэл тэнцүү борлуулалт хийсэн эсэхийг тооц.
// Жишээ нь: Барааний үнэ: 100, Тоо ширхэг: 20, Зарах үнэ: 150, Зарагдсан ширхэг: 10, Үр дүн: 500 алдагдалтай
function profitLossCalc(cost, quant, price, soldQ) {
  if (price * soldQ - cost * quant > 0) {
    console.log("Profit is " + (price * soldQ - cost * quant));
  } else {
    console.log("Loss is " + (price * soldQ - cost * quant));
  }
}
profitLossCalc(100, 20, 150, 20);

// Loop/Iteration Бодлогууд

// 1. 1-ээс n хүртэлх тоонуудыг хэвлэ
function findNumbers(a) {
  for (let number = 1; number <= a; number++) {
    console.log(number);
  }
}
findNumbers(5);

// 2. 1-ээс n хүртэлх тэгш тоог хэвлэ
function findEvenNumbers(a) {
  for (let number = 1; number <= a; number++) {
    if (number % 2 == 0) {
    }
  }
  console.log(number);
}
findEvenNumbers(10);

// 3. 1-ээс n хүртэлх тоонуудын нийлбэрийг ол
function findSumNumbers(a) {
  let sum = 0;
  for (let number = 1; number <= a; number++) {
    sum = sum + number;
  }
  console.log(sum);
}
findSumNumbers(5);

// 4. 1-ээс n хүртэлх сондгой тоонуудын нийлбэрийг ол.
function findSumEvenNumbers(a) {
  let sum = 0;
  for (let number = 0; number <= a; number++) {
    if (number % 2 == 1) {
      sum = sum + number;
    }
  }
  console.log(sum);
}
findSumEvenNumbers(10);

// 5. n тооны үржвэрийн хүрд хэвлэ ж: input:5 1x5=5 2x5=10 3x5=15 4x5=20 5x5=25 6x5=30 7x5=35 8x5=40 9x5=45
function findTimesTable(a) {
  console.log(timesTable);
}
findTimesTable();
