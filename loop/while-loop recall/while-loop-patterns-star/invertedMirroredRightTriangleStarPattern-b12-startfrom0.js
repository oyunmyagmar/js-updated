// 12. Inverted Mirrored Right Triangle Star Pattern
//  01234
//0 *****
//1 -****
//2 --***
//3 ---**
//4 ----*

let size = 5;
let row = 0;

while (row < size) {
  let column = 0;
  let stars = "";

  while (column < size) {
    if (column < row) {
      stars = stars + " ";
    }
    column = column + 1;
  }

  let startsaddedafter = size - row;

  while (startsaddedafter > 0) {
    stars = stars + "*";
    startsaddedafter = startsaddedafter - 1;
  }
  console.log(stars);
  row = row + 1;
}
