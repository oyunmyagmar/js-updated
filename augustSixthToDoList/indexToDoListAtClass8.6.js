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
//   listData = newListData;
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

// To Do List yr ni yu hdg?
// 1. write save
// 2. read list
// 3. isDone <- check
// 4. update
// 5. delete

// todo list hilgedeg ve? <- company yariltslaga -d to do list hii gj mgadgui
// to do list ni
// ireduid hih yostoi yumnuudiin
// backend logic
// frontend gol logic
// -uudin hamgin jijig helber POC bdlar buh zuiliig turshij uzeh bolomjtoi

// backend -iin gol zuil ni, tsana yavj bga zuil ni
// CRUD <- oilgovol ehnii eeljind junior tuvshind gaigui
// C - create <- bichij shiner usgej bna
// R - read <- nugu zuile unshad delgets der harulj bn
// U - update
// D - delete

// ene 4 logic -g backend der 1 file system -ruu 1 array -ruu
// shiner nemed, update -lad ustgad chadaj bval chadaj bn gj uzdeg
// to do list der ene logic bdag

// code -nii zarchim?
// web site herhen ajildag?
// client -> website
// website -> server
// server => <= database
// server -> webpage
// website ni client deree haragdaj bga

// database ? <- bidnii sayiin hisen listData gj oilgoj bolno
// uuniig tsaanaa database gsen uur 1 computer der hadgalj bga

// backend gdeg zuil ni db -ee Read(CRUD) higed website -ruu yavulna
// website ni teriig unshsaad render hij zurj harulna

// ene logic -iig 6 sariin hugatsand oilgoh
// anhnaasaa zuv daraalaltai zuv bichih ni zuv -> MVP
