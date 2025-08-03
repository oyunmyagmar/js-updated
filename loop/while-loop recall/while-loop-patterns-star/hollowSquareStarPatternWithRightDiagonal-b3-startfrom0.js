// 3. Hollow Square Star Pattern with Diagonal
//  01234
//0 *****
//1 **  * 1 - 1
//2 * * * 2 - 2
//3 *  ** 3 - 3
//4 *****

let size = 5;
let row = 0;

while (row < size) {
  let column = 0;
  let stars = "";

  while (column < size) {
    if (
      row == 0 ||
      row == size - 1 ||
      column == 0 ||
      column == size - 1 ||
      column == row
    ) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column + 1;
  }
  console.log(stars);
  row = row + 1;
}
