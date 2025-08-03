// 10. Hollow Right Triangle Star Pattern
//  54321
//5 *
//4 **
//3 * *
//2 *  *
//1 *****

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column >= row) {
    if (column == size || row == 1 || column == row) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}
