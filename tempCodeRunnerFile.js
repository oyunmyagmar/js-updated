let nsize5 = 5;
for (i = 1; i <= nsize5; i++) {
  let number = "";
  for (j = 1; i >= nsize5 - j; j++) {
    number += "-";
  }
  for (j = 1; j <= nsize5; j++) {
    number += i;
  }
  console.log(number);
}