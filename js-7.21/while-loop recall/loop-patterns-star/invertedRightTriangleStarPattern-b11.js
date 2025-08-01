// 11. Inverted Right Triangle Star Pattern
//  54321
//5 *****
//4 ****
//3 ***
//2 **
//1 *

console.log("ver0"); // else bichihgui tohioldold column ni uuruu dagad bagasana

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    if (column <= row) {
      stars = stars + "*";
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}

// 11. Inverted Right Triangle Star Pattern
//  01234
//0 *****
//1 ****
//2 ***
//3 **
//4 *

console.log("ver1");

let size1 = 5;
let roww = 0;

while (roww < size1) {
  let columnn = 0;
  let stars = "";

  while (columnn < size1) {
    if (columnn < size1 - roww) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
    columnn = columnn + 1;
  }
  console.log(stars);
  roww = roww + 1;
}

console.log("ver2"); // col ni row -toi = gej uzej bga uchras col ni uuruu bagasna

let size2 = 5;
let rowww = size2;

while (rowww > 0) {
  let columnnn = rowww;
  let stars = "";

  while (columnnn > 0) {
    stars = stars + "*";
    columnnn = columnnn - 1;
  }
  console.log(stars);
  rowww = rowww - 1;
}
