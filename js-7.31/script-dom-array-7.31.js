let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Toyota_Prius_2016_%282%29.jpg/960px-Toyota_Prius_2016_%282%29.jpg",
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
    image:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ca8eb969-b7e6-4b99-8a2f-94c76583f31c/23b0d0d6-14d4-490c-8bcb-5dbe55b15666.png",
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
    image:
      "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/NhM3iXT7RZOIckqmuxJX",
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
    image: "https://cms-i.autodaily.vn/du-lieu/2018/01/14/ford-ranger-5.jpg",
  },
  {
    model: "Hyundai Sonata", //
    type: "Sedan", //
    price: 29000000, //
    mileage: 95000, //
    brand: "Hyundai", //
    year: 2017, //
    isAvailable: false,
    fuelEfficiency: 6.5, //
    color: "silver",
    sufpplier: "AutoJapan",
    engineSize: 2.4, //
    image:
      "https://pictures.dealer.com/r/reliablehyundaivtg/0525/cd3cfd49ccfb0b4b1e92a6fb0106279ax.jpg",
  },
];

const carListDiv = document.getElementById("car-list");
let carNamePTags = "";

cars.map((car) => {
  carNamePTags = carNamePTags + '<div class="card">';

  carNamePTags = carNamePTags + '<div class="card_img">'; //   "" //   '' //   `back-ticks` -> string dund huvisagch nemehed or ashiglahad
  carNamePTags = carNamePTags + `<img class="carImg" src="${car.image}">`; // ${} -> string dotor variable oruulahad
  carNamePTags = carNamePTags + "</div>";

  carNamePTags = carNamePTags + '<div class="card_text">';
  carNamePTags =
    carNamePTags + '<p class="carPrice">' + car.price + " сая ₮" + "</p>";
  carNamePTags = carNamePTags + '<div class="carNameAndYear">';
  carNamePTags =
    carNamePTags + '<p class="carName">' + car.model + "," + "</p>";
  carNamePTags = carNamePTags + '<p class="carYear">' + car.year + "</p>";
  carNamePTags = carNamePTags + "</div>";

  carNamePTags = carNamePTags + '<div class="carDetails">';
  carNamePTags =
    carNamePTags +
    '<p class="carMileage">' +
    car.mileage +
    " км" +
    "*" +
    "</p>";
  carNamePTags =
    carNamePTags + '<p class="carEngineSize">' + car.engineSize + " л" + "</p>";
  carNamePTags =
    carNamePTags +
    '<p class="carFuelEfficiency">' +
    car.fuelEfficiency +
    " сс" +
    "</p>";
  carNamePTags = carNamePTags + "</div>";

  carNamePTags = carNamePTags + "</div>";

  carNamePTags = carNamePTags + "</div>";
});
console.log(carNamePTags);
carListDiv.innerHTML = carNamePTags;
