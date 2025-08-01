// 9. Mirrored Right Triangle Star Pattern
//  54321
//5     *
//4    **
//3   ***
//2  ****
//1 *****

console.log("ver0");

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    if (column <= size - row + 1) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}

//  01234
//0     * 0-4
//1    ** 1-3
//2   *** 2-2
//3  **** 3-1
//4 ***** 4-0

console.log("ver1");

let size1 = 5;
let roww = 0;

while (roww < size1) {
  let columnn = 0;
  let stars = "";

  while (columnn < size1) {
    if (columnn >= size1 - 1 - roww) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    columnn = columnn + 1;
  }
  console.log(stars);
  roww = roww + 1;
}

//  01234
//0 ----* 0-4
//1 ---** 1-3
//2 --*** 2-2
//3 -**** 3-1
//4 ***** 4-0

console.log("ver2"); // by teacher
// while loop ehleh bolgond 1 huvisagch bn
// ter huvisagchiig uurchulj bj loop maani heze zogsoho medne

let size2 = 5;
let rowww = 0;

while (rowww < size2) {
  let columnnn = 0;
  let stars = "";

  while (columnnn < size2 - 1 - rowww) {
    stars = stars + " ";
    columnnn = columnnn + 1;
  }
  let staraddedafter = rowww; // araas ni od hevleh
  while (staraddedafter >= 0) {
    stars = stars + "*";
    staraddedafter = staraddedafter - 1;
  }
  console.log(stars);
  rowww = rowww + 1;
}
