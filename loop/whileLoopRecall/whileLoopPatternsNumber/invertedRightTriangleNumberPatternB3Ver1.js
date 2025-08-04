// 3. Inverted Right Triangle Number Pattern

//1 12345
//2 1234
//3 123
//4 12
//5 1

let sizes = 5;
let rows = 1;

while (rows <= sizes) {
  let column = 1;
  let numbers = "";

  while (column <= sizes) {
    if (column <= sizes - rows + 1) {
      numbers = numbers + column;
    }
    column = column + 1;
  }
  console.log(numbers);
  rows = rows + 1;
}
