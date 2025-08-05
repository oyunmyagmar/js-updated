const body = document.querySelector("body");
const image = document.createElement("img");
const price = document.createElement("h6");
const priceContainer = document.createElement("div");
const title = document.createElement("p");
const description = document.createElement("span");
const container = document.createElement("div");

image.src =
  "https://cdn1.unegui.mn/media/cache1/2d/ff/2dff7360f27550a1b578eb73d5564bfc.webp";
image.alt = "image";
price.innerText = "24.5 сая ₮";
title.innerText = "Toyota Camry, 2013/2022";
description.innerText = "1002000 км *  Автомат * 2.4 л * Хайбрид";

image.classList.add("image");
priceContainer.classList.add("priceContainer");
price.classList.add("price");
title.classList.add("title");
description.classList.add("description");
container.classList.add("container");

priceContainer.appendChild(price);
container.appendChild(image);
container.appendChild(priceContainer);
container.appendChild(title);
container.appendChild(description);
body.appendChild(container);
