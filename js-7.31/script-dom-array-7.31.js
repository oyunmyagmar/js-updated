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
      "https://media.ed.edmunds-media.com/honda/civic/2026/oem/2026_honda_civic_sedan_si_fq_oem_1_815.jpg",
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
      "https://media.ed.edmunds-media.com/honda/civic/2026/oem/2026_honda_civic_sedan_si_fq_oem_1_815.jpg",
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
      "https://media.ed.edmunds-media.com/honda/civic/2026/oem/2026_honda_civic_sedan_si_fq_oem_1_815.jpg",
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
    image:
      "https://media.ed.edmunds-media.com/honda/civic/2026/oem/2026_honda_civic_sedan_si_fq_oem_1_815.jpg",
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
      "https://media.ed.edmunds-media.com/honda/civic/2026/oem/2026_honda_civic_sedan_si_fq_oem_1_815.jpg",
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
  carNamePTags =
    carNamePTags + '<p class="carMileage">' + car.mileage + " км" + "</p>";
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
});
console.log(carNamePTags);
carListDiv.innerHTML = carNamePTags;
