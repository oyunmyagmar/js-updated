// js -eer html -iin elementuudiig udirdah
// console.log("hello");

// input gsen huvisagch zarlana
// id -aar ni barij avah
let input = document.getElementById("age-input");
let input1 = document.getElementById("num-input");
let button = document.getElementById("submit");

// tovchluur darahad <- chagnah tuhurumj -> click -iig chagnah
button.addEventListener("click", () => {
  // console.log("hello world");
  // console.log(input.value);
  console.log(input.value + input1.value);
  console.log(parseInt(input.value) + parseInt(input1.value));
});

// 1 input nemeed 2 input -tei
// submit darangut console.log der niilberiig ni gargana

// value -ruu string utga ordog
// input deer toonoos uur utga text bichij boldog uchraas temdegt gej avaad bga
