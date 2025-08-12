const body = document.querySelector("body");

const title = document.createElement("h5");
const select = document.createElement("select");
const option = document.createTextNode("option");

title.innerText = "5) Dropdown Filter";

select.append(option);
body.appendChild(title);
body.appendChild(select);
