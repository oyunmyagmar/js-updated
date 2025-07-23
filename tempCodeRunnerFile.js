let nsize5 = 5;
for (i = nsize5; i >= 1; i++) {
  let number = "";
  for (j = nsize5; j >= i; j--) {
    number += j;
  }
  console.log(number);
}
