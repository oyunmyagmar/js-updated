// 9. Mirrored Right Triangle Star Pattern
//  01234
//0 ----* 0-4
//1 ---** 1-3
//2 --*** 2-2
//3 -**** 3-1
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
