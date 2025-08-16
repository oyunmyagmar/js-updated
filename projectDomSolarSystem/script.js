const body = document.querySelector("body");

const printShootingStars = () => {
  const shootingStarContainer = document.createElement("div");
  const shootingStar = document.createElement("div");

  shootingStar.classList.add("shootingStar");
  shootingStarContainer.classList.add("shootingStarContainer");

  shootingStarContainer.appendChild(shootingStar);
  body.appendChild(shootingStarContainer);

  clearInterval(interval);
};

const interval = setInterval(printShootingStars, 1000);
