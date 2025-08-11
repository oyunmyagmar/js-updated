// ta neree oruulna uu? gsen garchigtai
// dood tald ni 1 inout der neree orulad submit btn darangut
// console.log der Sain bn u Andy gj garj irdeg

let input = document.getElementById("name-input");
let button = document.getElementById("btn");
let greeting = "Sain bn uu! ";

button.addEventListener("click", () => {
  console.log("Sain uu!", input.value);
  console.log(greeting + input.value);
});
