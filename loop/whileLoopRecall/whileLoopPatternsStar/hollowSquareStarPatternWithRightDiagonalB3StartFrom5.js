// 3. Hollow Square Star Pattern with Diagonal
//  54321
//5 *****
//4 **  * 4 - 4
//3 * * * 3 - 3
//2 *  ** 2 - 2
//1 *****

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
