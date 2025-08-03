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
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 8. Бүх машины үнийг 15% нэмдэг функц бич.

// option 1
function increaseCarPrices(cars) {
  let carsWithIncreasedPrices = cars.map((car) => {
    return {
      ...car,
      price: Math.floor(car.price * 1.15),
    };
  });
  return carsWithIncreasedPrices;
}
const resultCarsWithIncreasedPrices = increaseCarPrices(cars);
console.log("8. Cars With Increased Prices: ", resultCarsWithIncreasedPrices);

// price modify hiigeed array -iin shine huvilbar uusgej bga
// price modify hiihed umnuh price -aa darj bichij bga
// object ... haaltaa neegeed umnuh field deeree modified field -ee oruulj ugch bga ni zuv

// option 2 -> ???yagad zuvhun price garch irj bga??? -> uchir ni burjgar haaltad return hiihdee zuvhun modified car.price -aa hiij bga uchras
// function increaseCarPrices1(cars) {
//   let carsWithIncreasedPrices = cars.map((car) => {
//     return Math.floor(car.price * 1.15);
//   });
//   return carsWithIncreasedPrices;
// }
// const resultCarsWithIncreasedPrices1 = increaseCarPrices1(cars);
// console.log("8. Cars With Increased Prices1: ", resultCarsWithIncreasedPrices1);
