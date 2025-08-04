// 5. Hollow Rhombus Star Pattern
//  01234
//0     *****
//1    *   *
//2   *   *
//3  *   *
//4 *****

let size = 5;
let row = 0;

while (row < size) {
  let stars = "";
  let emptyAddedBefore = size - 1 - row;

  while (emptyAddedBefore > 0) {
    stars = stars + " ";
    emptyAddedBefore = emptyAddedBefore - 1;
  }
  let column = 0;

  while (column < size) {
    if (row == 0 || row == size - 1 || column == 0 || column == size - 1) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column + 1;
  }
  console.log(stars);
  row = row + 1;
}
