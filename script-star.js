// 1. Square Star Pattern
let sp1Size = 7;
let sp1mur = sp1Size;

while (sp1mur > 0) {
  let sp1bagana = sp1Size;
  let sp1Result = "";
  while (sp1bagana > 0) {
    sp1Result = sp1Result + "*";
    sp1bagana = sp1bagana - 1;
  }
  console.log(sp1Result);
  sp1mur = sp1mur - 1;
}

// 2. Hollow Square Star Pattern
let sp2Size = 8;
let sp2row = sp2Size;

while (sp2row > 0) {
  let sp2column = sp2Size;
  let sp2Result = "";
  while (sp2column > 0) {
    if (
      sp2column == sp2Size ||
      sp2column == 1 ||
      sp2row == sp2Size ||
      sp2row == 1
    ) {
      sp2Result = sp2Result + "*";
    } else {
      sp2Result = sp2Result + " ";
    }
    sp2column = sp2column - 1;
  }
  console.log(sp2Result);
  sp2row = sp2row - 1;
}

// 3. Hollow Square Star Pattern with Diagonal
//  12345
//1 *****
//2 **  *  2 - 2
//3 * * *  3 - 3
//4 *  **  4 - 4
//5 *****
let sp3Size = 6;
let sp3row = sp3Size;

while (sp3row > 0) {
  let sp3column = sp3Size;
  let sp3Result = "";
  while (sp3column > 0) {
    if (
      sp3column == 1 ||
      sp3column == sp3Size ||
      sp3row == 1 ||
      sp3row == sp3Size ||
      sp3column == sp3row
    ) {
      sp3Result = sp3Result + "*";
    } else {
      sp3Result = sp3Result + " ";
    }
    sp3column = sp3column - 1;
  }
  console.log(sp3Result);
  sp3row = sp3row - 1;
}

// start of - Hollow Square Star Pattern with LEFT Diagonal
//  |
//  V
//  column
//  12345
//1 *****
//2 *  **  2 - 4
//3 * * *  3 - 3
//4 **  *  4 - 2
//5 *****
// -> row
let size = 5;
let row = size;
while (row > 0) {
  let column = size;
  let result = "";
  while (column > 0) {
    if (
      row == 1 ||
      row == size ||
      column == 1 ||
      column == size ||
      column - 1 == size - row // 1-iig hasch ugsniig dahin bichij uzeh!!!
    ) {
      result = result + "*";
    } else {
      result = result + " ";
    }
    column = column - 1;
  }
  console.log(result);
  row = row - 1;
}
// end of - Hollow Square Star Pattern with LEFT Diagonal

// 11. Inverted Right Triangle Star Pattern
//  12345
//1 *****
//2 ****
//3 ***
//4 **
//5 *

let sp11Size = 5;
let sp11row = sp11Size;
while (sp11row > 0) {
  let sp11column = sp11Size;
  let sp11Result = "";
  while (sp11column > 0) {
    sp11Result = sp11Result + "*";
    sp11column = sp11column - 1;
  }
  console.log(sp11Result);
  sp11row = sp11row - 1;
}
