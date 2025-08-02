// 11. Inverted Right Triangle Star Pattern
//  54321
//5 *****
//4 ****
//3 ***
//2 **
//1 *

let size = 5;
let row = size;

while (row > 0) {
  let column = row; // col ni row -toi = gej uzej bga uchras col ni uuruu bagasna
  let stars = "";

  while (column > 0) {
    stars = stars + "*";
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}
