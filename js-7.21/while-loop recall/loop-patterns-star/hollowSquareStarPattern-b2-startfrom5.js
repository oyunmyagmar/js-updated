// 2. Hollow Square Star Pattern
//  54321
//5 *****
//4 *   *
//3 *   *
//2 *   *
//1 *****

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    if (row == 1 || row == size || column == size || column == 1) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}
