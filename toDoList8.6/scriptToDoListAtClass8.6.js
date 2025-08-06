let listData = [];
const ul = document.querySelector("ul");

const printInputValue = (value) => {
  console.log(value);
  listData.push(value);
  console.log(listData);
};

const render = () => {
  //   console.log("working");
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const liButton = document.createElement("button");
    li.innerText = element;
    liButton.innerText = "x";

    liButton.addEventListener("click", () => {
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData;
      render();
      //   console.log(newListData), "data";
    });

    ul.appendChild(li);
    li.appendChild(liButton);
  });
};

// const deleteInputValue = (value) => {
//   const newListData = listData.filter((element) => {
//     if (element !== value) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
const body = document.querySelector("body");
// console.log(body);
const input = document.createElement("input");
const button = document.createElement("button");

button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});
button.innerText = "click me";
// button.onclick = printInputValue;

body.appendChild(input);
body.appendChild(button);

// function dotor function duudahiig -> callback function

// POC -> Proof Of Concept <- uursduduu logic -oo zuv ajillaj buig check hiih zorilgoor developer -uudin gargaj bui turshilt hij bui zuil
// MVP -> Minimum Viable Product <- client esvel sponsor -uuddaa oilgomjtoi hamgin jijig baidlaar hiij bui zuiliig
// poc bolon mvp hiih des daraalal bdg
// hamgiin jijig hij bui hseg ch hurtel ajildag bol ter chin une tsenetei
// yuma hihde hij bui yum mani ajildag bh yostoi
// sanaagaa turshij uzeh gj bga bol hamgiin bagas ni ajildag yum hij yav

// minii bichsen yumiig hadgalaad haruuldag bolson bhad l hamgin jijig logic ni bolson bn
// daraa ni terige update hiinuu ustgana uu gdg ni daraachiin logic bn
