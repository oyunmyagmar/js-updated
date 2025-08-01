// 3. Hollow Square Star Pattern with Diagonal
//  54321
//5 *****
//4 **  * 4 - 4
//3 * * * 3 - 3
//2 *  ** 2 - 2
//1 *****

console.log("ver1");

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    if (row == 5 || row == 1 || column == 5 || column == 1 || column == row) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}

//  01234
//0 *****
//1 **  * 1 - 1
//2 * * * 2 - 2
//3 *  ** 3 - 3
//4 *****

console.log("ver1");

let size1 = 5;
let roww = 0;

while (roww < size1) {
  let columnn = 0;
  let stars = "";

  while (columnn < size1) {
    if (
      roww == 0 ||
      roww == size1 - 1 ||
      columnn == 0 ||
      columnn == size1 - 1 ||
      columnn == roww
    ) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    columnn = columnn + 1;
  }
  console.log(stars);
  roww = roww + 1;
}
