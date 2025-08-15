// herhen keyboard -nii event -iig barij avah ve, js-iin gj google -deed
// herhen keyboard -iin tovchlur -iig barij avah ve gdgiig google -dene
// 1 tovchluur darangut ulan esvel tsenher nemegddeg bolgono gsen ug

const body = document.querySelector("body");
const redBox = document.createElement("div");
const blueBox = document.createElement("div");

redBox.style.width = "50%";
blueBox.style.width = "50%";

redBox.classList.add("redBox");
blueBox.classList.add("blueBox");

document.addEventListener("keydown", (event) => {
  // console.log("key value of pressed key", event.key);
  if (event.key == "ArrowRight") {
    redBox.style.width = parseInt(redBox.style.width) + 1 + "%";
    blueBox.style.width = parseInt(blueBox.style.width) - 1 + "%";

    redBox.innerText = redBox.style.width;
    blueBox.innerText = blueBox.style.width;
  } else if (event.key == "ArrowLeft") {
    blueBox.style.width = parseInt(blueBox.style.width) + 1 + "%";
    redBox.style.width = parseInt(redBox.style.width) - 1 + "%";

    blueBox.innerText = blueBox.style.width;
    redBox.innerText = redBox.style.width;
  }
});

body.appendChild(redBox);
body.appendChild(blueBox);
