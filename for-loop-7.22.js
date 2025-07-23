// while loop
let current = 1;
let end = 100;
while (current <= end) {
  if (current % 2 == 0) {
    console.log(current);
  }
  current += 1;
}

// for loop -> for(;;)
// initialize -> run only once
// condition -> body ajillah esehiig shiiden umnu ni ajillana
// update -> hamgiin suuld ajillana
// initialize; conditon; update
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// i -> mur, row ilerhiilne
// j -> bagana, column ilerhiilne

// i ba j 0 esvel 1 -ees ehleh mur ba baganii toog harval doorh:
// 11*2*3*4*5*
// 21*2*3*4*5*
// 31*2*3*4*5*
// 41*2*3*4*5*
// 51*2*3*4*5*
let asize = 5;
for (let i = 1; i <= bsize; i++) {
  let star = i + ""; // string uchraas ar araasaa yavj zalgaj bgaa, 0 bolgovol toon der nemgdene
  for (let j = 1; j <= bsize; j++) {
    star += j + "*";
  }
  console.log(star);
}

// i ba j 5 -aas ehleh mur ba baganii toog harval doorh:
// 55*4*3*2*1*
// 45*4*3*2*1*
// 35*4*3*2*1*
// 25*4*3*2*1*
// 15*4*3*2*1*
let bsize = 5;
for (let i = bsize; i > 0; i--) {
  let star = i + "";
  for (let j = bsize; j > 0; j--) {
    star += j + "*";
  }
  console.log(star);
}

// Star Patterns

// 1. Square Star Pattern OK
//  01234
//0 *****
//1 *****
//2 *****
//3 *****
//4 *****

let size1 = 5;
for (let i = 0; i < size1; i++) {
  let star = "";
  for (let j = 0; j < size1; j++) {
    star += "*";
  }
  console.log(star);
}

// 2. Hollow Square Star Pattern OK
//  01234
//0 *****
//1 *   *
//2 *   *
//3 *   *
//4 *****

let size2 = 5;
for (let i = 0; i < size2; i++) {
  let star = "";
  for (let j = 0; j < size2; j++) {
    if (j == 0 || j == size2 - 1 || i == 0 || i == size2 - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// 3. Hollow Square Star Pattern with Diagonal OK
//  01234
//0 *****
//1 **  *
//2 * * *
//3 *  **
//4 *****

let size3 = 5;
for (let i = 0; i < size3; i++) {
  let star = "";
  for (j = 0; j < size3; j++) {
    if (i == 0 || i == size3 - 1 || j == 0 || j == size3 - 1 || i == j) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// 4. Rhombus Star Pattern OK
//  01234
//0 ----*****
//1 ---*****
//2 --*****
//3 -*****
//4 *****

let size4 = 5;
for (let i = 0; i < size4; i++) {
  let star = "";
  for (let j = 0; j < size4 - 1 - i; j++) {
    star += " ";
  }
  for (let j = 0; j < size4; j++) {
    star += "*";
  }
  console.log(star);
}

// 5. Hollow Rhombus Star Pattern OK
//  01234
//0 ----*****
//1 ---*   *
//2 --*   *
//3 -*   *
//4 *****

let size5 = 5;
for (i = 0; i < size5; i++) {
  let star = "";
  for (j = 0; j < size5 - 1 - i; j++) {
    star += " ";
  }
  for (j = 0; j < size5; j++) {
    if (i == 0 || i == size5 - 1 || j == 0 || j == size5 - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// 6. Mirrored Rhombus Star Pattern OK
//  01234
//0 *****
//1 -*****
//2 --*****
//3 ---*****
//4 ----*****

let size6 = 5;
for (let i = 0; i < size6; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += " ";
  }
  for (let j = 0; j < size6; j++) {
    star += "*";
  }
  console.log(star);
}

// 7. Hollow Mirrored Rhombus Star Pattern OK
//  01234
//0 *****
//1 -*   *
//2 --*   *
//3 ---*   *
//4 ----*****

let size7 = 5;
for (let i = 0; i < size7; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += " ";
  }
  for (let j = 0; j < size7; j++) {
    if (j == 0 || j == size7 - 1 || i == 0 || i == size7 - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

//8. Right Triangle Star Pattern OK
//  01234
//0 *
//1 **
//2 ***
//3 ****
//4 *****

let size8 = 5;
for (i = 0; i < size8; i++) {
  let star = "";
  for (j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//8-1. Right Triangle Star Pattern // i bolon j utga 1-ees ehelsen ued
//  12345
//1 *
//2 **
//3 ***
//4 ****
//5 *****

let size108 = 5;
for (let i = 1; i <= size108; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//9. Mirrored Right Triangle Star Pattern OK
//  01234
//0 ----*
//1 ---**
//2 --***
//3 -****
//4 *****

let size9 = 5;
for (let i = 0; i < size9; i++) {
  let star = "";
  for (let j = 0; j < size9 - 1 - i; j++) {
    star += " ";
  }
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// 10. Hollow Right Triangle Star Pattern OK
//  01234
//0 *
//1 **
//2 * *
//3 *  *
//4 *****

let size10 = 5;
for (let i = 0; i < size10; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    if (j == 0 || j == i || i == size10 - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// 11. Inverted Right Triangle Star Pattern OK
//  01234
//0 *****
//1 ****
//2 ***
//3 **
//4 *

let size11 = 5;
for (let i = 0; i < size11; i++) {
  let star = "";
  for (let j = 0; j < size11 - i; j++) {
    star += "*";
  }
  console.log(star);
}

// 12. Inverted Mirrored Right Triangle Star Pattern OK
//  01234
//0 *****
//1 -****
//2 --***
//3 ---**
//4 ----*

let size12 = 5;
for (let i = 0; i < size12; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += " ";
  }
  for (let j = 0; j < size12 - i; j++) {
    star += "*";
  }
  console.log(star);
}

// 13. Pyramid (Equilateral Triangle) Star Pattern OK
//  01234
//0 ----*
//1 ---***
//2 --*****
//3 -*******
//4 *********

let size13 = 5;
for (i = 0; i < size13; i++) {
  let star = "";
  for (j = 0; j < size13 - 1 - i; j++) {
    star += " ";
  }
  for (j = 0; j < i * 2 + 1; j++) {
    star += "*";
  }
  console.log(star);
}

// 14. Hollow Pyramid Star Pattern OK
//  01234
//0 ----*
//1 ---* *
//2 --*   *
//3 -*     *
//4 *********

let size14 = 5;
for (i = 0; i < size14; i++) {
  let star = "";
  for (j = 0; j < size14 - 1 - i; j++) {
    star += " ";
  }
  for (j = 0; j < i * 2 + 1; j++) {
    if (j == 0 || i == size14 - 1 || j == i * 2) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// 15. Diamond Star Pattern
//  01234
//0   *
//1  ***
//2 *****
//3  ***
//4   *

let size15 = 5;
for (i = 0; i < size15; i++) {
  let star = "";
  for (j = 0; j < size15; j++) {
    star += "*";
  }
  console.log(star);
}

// 16. X Star Pattern OK
//  012345678
//0 *       *
//1  *     *
//2   *   *
//3    * *
//4     *
//5    * *
//6   *   *
//7  *     *
//8 *       *

let size16 = 9;
for (let i = 0; i < size16; i++) {
  let star = "";
  for (let j = 0; j < size16; j++) {
    if (j == i || j == size16 - 1 - i) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// 17. Plus Star Pattern OK

//  012345678
//0     +
//1     +
//2     +
//3     +
//4 +++++++++
//5     +
//6     +
//7     +
//8     +

//option1
let size17 = 9;
for (let i = 0; i < size17; i++) {
  let star = "";
  if (i == (size17 - 1) / 2) {
    for (let j = 0; j < size17; j++) {
      star += "*";
    }
  } else {
    for (let j = 0; j < size17; j++) {
      if (j == (size17 - 1) / 2) {
        star += "*";
      } else {
        star += " ";
      }
    }
  }
  console.log(star);
}
// option2
let size117 = 9;
for (let i = 0; i < size117; i++) {
  let star = "";
  for (let j = 0; j < size117; j++) {
    if (j == (size117 - 1) / 2 || i == (size117 - 1) / 2) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// Number Patterns

// 1. Rectangle Number Pattern OK
//1 12345
//2 12345
//3 12345
//4 12345
//5 12345
let nsize1 = 5;
for (let i = 1; i <= nsize1; i++) {
  let number = "";
  for (let j = 1; j <= nsize1; j++) {
    number += j;
  }
  console.log(number);
}

// 2. Right Triangle Number Pattern OK
//1 1
//2 12
//3 123
//4 1234
//5 12345

let nsize2 = 5;
for (i = 1; i <= nsize2; i++) {
  let number = "";
  for (j = 1; j <= i; j++) {
    number += j;
  }
  console.log(number);
}

// 3. Inverted Right Triangle Number Pattern OK
//1 12345
//2 1234
//3 123
//4 12
//5 1

let nsize3 = 5;
for (i = 1; i <= nsize3; i++) {
  let number = "";
  for (j = 1; j <= nsize3 - i + 1; j++) {
    number += j;
  }
  console.log(number);
}

// 4. Right Triangle with Repeating Numbers OK
// 12345
// 1
// 22
// 333
// 4444
// 55555

let nsize4 = 5;
for (i = 1; i <= nsize4; i++) {
  let number = "";
  for (j = 1; j <= i; j++) {
    number += i;
  }
  console.log(number);
}

// 5. Right Triangle with Row Numbers
// 1----
// 21---
// 321--
// 4321-
// 54321

// 6. Floyd’s Triangle
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15

let nsize6 = 5;
for (i = 1; i <= nsize6; i++) {
  let number = "";
  for (j = 1; j <= i; j++) {
    number += "" + 1 * j;
  }
  console.log(number);
}

// 13. Descending Number Triangle
//5 5
//4 54
//3 543
//2 5432
//1 54321

let nsize5 = 5;
for (i = nsize5; i >= 1; i--) {
  let number = "";
  for (j = nsize5; j >= i; j--) {
    number += j;
  }
  console.log(number);
}

// 14. Mirror Right Triangle
// ----1
// ---12
// --123
// -1234
// 12345
