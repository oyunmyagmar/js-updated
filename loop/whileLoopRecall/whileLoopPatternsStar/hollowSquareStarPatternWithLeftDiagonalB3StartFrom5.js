// 3-1. Hollow Square Star Pattern with LEFT Diagonal
//  54321
//5 *****
//4 *  **
//3 * * *
//2 **  *
//1 *****

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    if (
      row == size ||
      row == 1 ||
      column == size ||
      column == 1 ||
      column == size - row + 1
    ) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}
