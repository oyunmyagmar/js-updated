// 12. Inverted Mirrored Right Triangle Star Pattern
//  54321
//5 *****
//4 -****
//3 --***
//2 ---**
//1 ----*

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    if (column > row) {
      stars = stars + " ";
    }
    column = column - 1;
  }
  let startsaddedafter = row;

  while (startsaddedafter > 0) {
    stars = stars + "*";
    startsaddedafter = startsaddedafter - 1;
  }
  console.log(stars);
  row = row - 1;
}
