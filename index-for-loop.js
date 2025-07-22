// 6. Mirrored Rhombus Star Pattern

//  01234
//0 *****
//1  *****
//2   *****
//3    *****
//4     *****

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

// 7. Hollow Mirrored Rhombus Star Pattern

//  01234
//0 *****
//1  *   *
//2   *   *
//3    *   *
//4     *****

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

//8. Right Triangle Star Pattern

//  12345
//1 *
//2 **
//3 ***
//4 ****
//5 *****

let size = 5;
for (let i = 1; i <= size; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//9. Mirrored Right Triangle Star Pattern

//  01234
//0     * 0-4
//1    ** 1-3
//2   *** 2-2
//3  **** 3-1
//4 ***** 4-0

let size9 = 5;
for (let i = 0; i < size9; i++) {
  let star = "";
  for (let j = 0; j < size9 - i; j++) {
    star += "-";
  }
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}
// asuuuh !

let size99 = 5;
for (let i = 0; i < size99; i++) {
  let star = "";
  for (let j = 0; j < size99; j++) {
    star += "*";
  }
  console.log(star);
}

// 10. Hollow Right Triangle Star Pattern

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
    if (i == size10 - 1 || i == j || j == 0) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// 11. Inverted Right Triangle Star Pattern

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

// 12. Inverted Mirrored Right Triangle Star Pattern

//  01234
//0 *****
//1  ****
//2   ***
//3    **
//4     *

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
