// 9. Mirrored Right Triangle Star Pattern
//  01234
//0 ----* 0-4
//1 ---** 1-3
//2 --*** 2-2
//3 -**** 3-1
//4 ***** 4-0

// by teacher
// while loop ehleh bolgond 1 huvisagch bn
// ter huvisagchiig uurchulj bj loop maani heze zogsoho medne

let size = 5;
let row = 0;

while (row < size) {
  let column = 0;
  let stars = "";

  while (column < size - 1 - row) {
    stars = stars + " ";
    column = column + 1;
  }
  let staraddedafter = row; // araas ni od hevlehed shine huvisagch zarlasan // row -toigoo ijil hemjeger urchlugduj bga uchir tentsulsen

  while (staraddedafter >= 0) {
    stars = stars + "*";
    staraddedafter = staraddedafter - 1;
  }
  console.log(stars);
  row = row + 1;
}
