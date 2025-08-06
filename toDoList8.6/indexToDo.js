let listData = [];
const ul = document.querySelector("ul");

const printInputValue = (value) => {
  // console.log(value);
  listData.push(value);
  // console.log(listData);
};
// printInputValue("hello")

const render = () => {
  //   console.log("working");
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";

    removeBtn.addEventListener("click", () => {
      // console.log("hello");
      // li.remove(); -> todo2 -iig ustgasan ch todo4 -iig uguhuur butsad garad irne? <- array ustgagui <- solih shardalagatai -> array -iin element -iig ustgah
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      // console.log(newListData, "data");
      listData = newListData;
      // console.log(listData, "list");
      render();
    });
    li.innerText = element;
    li.appendChild(removeBtn);
    ul.appendChild(li);
  });
};

const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
button.addEventListener("click", () => {
  //   input.value;
  printInputValue(input.value);
  render();
});
button.innerText = "click me";
// button.onclick = printInputValue();

body.appendChild(input);
body.appendChild(button);

// ene logic -iig listData array deer ashiglah heregtei bn
// const arr = [1, 2, 3, 4, 5]; // ustgah yostoi element k = 4 gvel array -d 4 -iin too bval ene array -aas ustah yostoi
// const helperArr = [];
// const k = 2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== k) {
//     helperArr.push(arr[i]);
//   }
// }
// console.log(helperArr);

// for loop, helperArr ashiglahgui hij bga hyalbarshulsan zuil ni filter function yum
// filter ni terentei tentsej bnu ugui yu gdgiig shuchij bn
// filter uuruu boolean utga avdag
// true bol filter -iin nuhtsul davj bga
// false bol unasan ter nuhtsuliig davj bga ter utgiig avahgui gsen ug
// filter uuruu boolean utga shalgadag uchir
// zaaval filter der iim ued true iim ued false gsen nuhtsul bichih shardlagagui
// const arr = [1, 2, 3, 4, 5];
// const k = 3;
// const test = arr.filter((el) => {
//   return el !== k;
// });
// console.log(test);
// garsan hariug test gsen huvisagchaar barij avad console.log -doy
// deerh shig for loop -tei code bichihed tsag avch bga blohor
// eniig mash baga bichiglel function bolgood uurchilsun bga

// !!! FIRST HALF !!!
// const listData = [];
// const ul = document.querySelector("ul");

// const printInputValue = (value) => {
//   console.log(value);
//   listData.push(value);
//   console.log(listData);
// };
// // printInputValue("hello")

// const render = () => {
//   //   console.log("working");
//   ul.innerHTML = "";
//   listData.map((element) => {
//     const li = document.createElement("li");
//     li.innerText = element;
//     ul.appendChild(li);
//   });
// };

// const body = document.querySelector("body");
// const input = document.createElement("input");
// const button = document.createElement("button");
// button.addEventListener("click", () => {
//   //   input.value;
//   printInputValue(input.value);
//   render();
// });
// button.innerText = "click me";
// // button.onclick = printInputValue();

// body.appendChild(input);
// body.appendChild(button);
