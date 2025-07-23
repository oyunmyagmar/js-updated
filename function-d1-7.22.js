// function -> 1 uildliig hiih chadamjtai zuiliig
// 1 yum avna // 1 ur dun uzuulne
// uuruu ajilladag zuil bish zaaval duudana
// function uuriingsenner(utga->yu gej nerlej hulej avahaa uuruu shidne){ene function yu hiih ve}
function problem(size) {
  for (i = 0; i < size; i++) {
    let stars = "";

    for (j = 0; j < size; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
problem(5); // function -iig ajilluulahiin tuld duudah/uildel hiih/ heregtei
problem(9); // (duudahad ugch uavulj bui zuil)
// let problem = 10 -> geh ijil nertei variable bichij blohgui!!
// function problem() -> gej blohgui umnu ni taniulsan uchir medne

// bi nasaa ugch yavulahad nadaa tursun on hevlej uguh function bich
function findBirthYear(age) {
  let birthYear = 2025 - age;
  console.log(birthYear);
}
findBirthYear(35);

// bi neree ugch yavuulahad console.log deer "Sain baina uu Miga" ged
// minii nereer mendchileh function bich
function sayGreeting(name) {
  let greet = "Sain Baina uu! ";
  console.log(greet + name);
}
sayGreeting("Miga");

// 2 bolon tuunees deesh utga avdag funvtion bich
// 3 too ugch yavuulahad 3 toonii niilber oldog function bich
// olon utga avbal , -aar tusgaarlana
function findSum(a, b, c) {
  let sum = a + b + c;
  console.log(sum);
}
findSum(10, 20, 30);
findSum(150, 240, 350);

// 3 too avdag function, console.log der hamgiin bagiig ni hevledeg function bich
function findMin(a, b, c) {
  if (a < b && a < c) {
    console.log(a);
  } else if (b < a || b < c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
findMin(1090, 270, 38700);

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
function checkPositiveNegativeZero(a) {
  if (a == 0) {
    console.log(a, "= zero");
  } else if (a > 0) {
    console.log(a, "is a positive number");
  } else if (a < 0) {
    console.log(a, "is a negative number");
  }
}
checkPositiveNegativeZero(-4);

// 4. Тоо 3 болон 5-д зэрэг, аль нэгэнд эсвэл аль алинд нь хуваагдах эсэхийг шалга.
function findDividedBy3or5(a) {
  if (a % 15 == 0) {
    console.log(a, "is divisible by 3 and 5");
  } else if (a % 3 == 0) {
    console.log(a, "is divisible by 3 only");
  } else if (a % 5 == 0) {
    console.log(a, "is divisible by 5 only");
  } else if (a % 15 !== 0 || a % 3 !== 0 || a % 5 !== 0)
    console.log(a, "is not divisible by 3 and 5");
}
findDividedBy3or5(1);

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
    console.log("Profit: " + (price * soldQ - cost * quant));
  } else if (price * soldQ - cost * quant < 0) {
    console.log("Loss: " + (price * soldQ - cost * quant));
  } else if (price * soldQ - cost * quant == 0) {
    console.log("Neither Gain nor Loss");
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
      console.log(number);
    }
  }
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
function findSumOddNumbers(a) {
  let sum = 0;
  for (let number = 0; number <= a; number++) {
    if (number % 2 == 1) {
      sum = sum + number;
    }
  }
  console.log(sum);
}
findSumOddNumbers(10);

// 5. n тооны үржвэрийн хүрд хэвлэ ж: input:5 1x5=5 2x5=10 3x5=15 4x5=20 5x5=25 6x5=30 7x5=35 8x5=40 9x5=45
function findTimesTable(a) {
  console.log(timesTable);
}
findTimesTable(6);

// 6. Тоо хэдэн оронтойг тоолох програм бич.
// 7. Эхний болон сүүлийн оронг ол
// 8. Эхний ба сүүлийн оронгийн нийлбэрийг ол
// 9. Эхний ба сүүлийн оронг солих програм бич.
// 10. Цифрүүдийн нийлбэрийг олох програм бич.
// 11. Тоо урвуу дарааллаар хэвлэх програм бич.(ж: 123 → 321).
// 12. Тоо бүрийн давтамжийг тооцох програм бич.
// (ж: 113334 -> 1:2ш,2:0ш,3:3ш,4:1ш,5:0ш...)
// 13. Тооны зэргийг олох програм бич.
// (ж: Тоо:2, Зэрэг:4, Үр дүн: 16 )
// 14. Факториал олох програм бич.
// 15. Хамгийн их ерөнхий хуваагч (HCF) олох програм бич.
// 16. Хамгийн бага ерөнхий хуваагдагч (LCM) олох програм бич.
