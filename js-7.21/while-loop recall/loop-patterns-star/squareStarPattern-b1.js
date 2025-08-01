// 1. Square Star Pattern
//  54321
//5 *****
//4 *****
//3 *****
//2 *****
//1 *****

console.log("ver1");

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    stars = stars + "*";
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}

// 1. Square Star Pattern
//  01234
//0 *****
//1 *****
//2 *****
//3 *****
//4 *****

console.log("ver2");

let size1 = 5;
let roww = 0;

while (roww < size1) {
  let columnn = 0;
  let stars = "";

  while (columnn < size1) {
    stars = stars + "*";
    columnn = columnn + 1;
  }
  console.log(stars);
  roww = roww + 1;
}
