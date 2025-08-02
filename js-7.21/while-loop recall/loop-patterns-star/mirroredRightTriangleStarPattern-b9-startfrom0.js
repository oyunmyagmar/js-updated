// 9. Mirrored Right Triangle Star Pattern
//  01234
//0     * 0-4
//1    ** 1-3
//2   *** 2-2
//3  **** 3-1
//4 ***** 4-0

let size = 5;
let row = 0;

while (row < size) {
  let column = 0;
  let stars = "";

  while (column < size) {
    if (column >= size - 1 - row) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column + 1;
  }
  console.log(stars);
  row = row + 1;
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
