// 5. Hollow Rhombus Star Pattern
//  54321
//5 ----*****
//4 ---*   *
//3 --*   *
//2 -*   *
//1 *****

let size = 5;
let row = size;

while (row > 0) {
  let stars = "";
  let emptyAddedBefore = row - 1;

  while (emptyAddedBefore > 0) {
    stars = stars + " ";
    emptyAddedBefore = emptyAddedBefore - 1;
  }
  let column = size;

  while (column > 0) {
    if (row == size || row == 1 || column == size || column == 1) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}
