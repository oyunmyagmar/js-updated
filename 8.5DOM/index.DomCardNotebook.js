const body = document.querySelector("body");
const imageContainer = document.createElement("div");
const image = document.createElement("img");
const textContainer = document.createElement("div");
const priceContainer = document.createElement("div");
const price = document.createElement("div");
const title = document.createElement("div");
const description = document.createElement("span");

imageContainer.classList.add("imageContainer");
image.classList.add("image");
textContainer.classList.add("textContainer");
priceContainer.classList.add("priceContainer");
price.classList.add("price");
textContainer.classList.add("textContainer");
title.classList.add("title");
description.classList.add("description");

image.src =
  "https://cdn1.unegui.mn/media/cache1/1d/02/1d025ec3834a4b6e185868c45c1a39d7.webp";
image.style.width = "280";
price.innerText = "2.2 сая ₮";
title.innerText = 'Dell 15.6", Intel Core i7, 16 GB RAM, 512 GB';
description.innerText =
  "1 өдрийн өмнө  |  УБ — Баянзүрх, Шинэ Монгол сургуулийн ойролцоо";

imageContainer.appendChild(image);
priceContainer.appendChild(price);
textContainer.appendChild(priceContainer);
textContainer.appendChild(title);
textContainer.appendChild(description);

body.appendChild(imageContainer);
body.appendChild(textContainer);
