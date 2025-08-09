// herhen keyboard -nii event -iig barij avah ve, js-iin gj google -deed
// herhen keyboard -iin tovchlur -iig barij avah ve gdgiig google -dene
// 1 tovchluur darangut ulan esvel tsenher nemegddeg bolgono gsen ug

const body = document.querySelector("body");
const boxRed = document.createElement("div");
const boxBlue = document.createElement("div");

boxRed.style.width = "50%";
boxBlue.style.width = "50%";

boxRed.classList.add("boxRed");
boxBlue.classList.add("boxBlue");

document.addEventListener("keydown", (event) => {
  // console.log("key value of pressed key", event.key);
  if (event.key == "ArrowRight") {
    boxRed.style.width = parseInt(boxRed.style.width) + 1 + "%";
    boxBlue.style.width = parseInt(boxBlue.style.width) - 1 + "%";

    boxRed.innerText = boxRed.style.width;
    boxBlue.innerText = boxBlue.style.width;
  } else if (event.key == "ArrowLeft") {
    boxBlue.style.width = parseInt(boxBlue.style.width) + 1 + "%";
    boxRed.style.width = parseInt(boxRed.style.width) - 1 + "%";

    boxBlue.innerText = boxBlue.style.width;
    boxRed.innerText = boxRed.style.width;
  }
});

body.appendChild(boxRed);
body.appendChild(boxBlue);
