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
];

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.

// option 1
function tagSuperEfficientCars(cars) {
  let filteredSuperEfficientCars = cars.filter((car) => {
    return car.fuelEfficiency < 4;
  });
  filteredSuperEfficientCars.map((superEfficientCar) => {
    return {
      ...superEfficientCar,
      tag: "super efficient",
    };
  });
  return filteredSuperEfficientCars;
}
const resultCarsTaggedWithSuperEfficient = tagSuperEfficientCars(cars);
console.log(
  "19. Cars Tagged With Super Efficient: ",
  resultCarsTaggedWithSuperEfficient
);

// option 2
function tagSuperEfficientCars1(cars) {
  let carsFilteredByEfficiency = cars
    .filter((car) => car.fuelEfficiency < 4)
    .map((car) => {
      return { ...car, tag: "super efficient" };
    });
  return carsFilteredByEfficiency;
}
const resultCarsTaggedWithSuperEfficient1 = tagSuperEfficientCars1(cars);
console.log(
  "19. Cars Tagged With Super Efficient1: ",
  resultCarsTaggedWithSuperEfficient1
);

// option 3 -> ???huvisagch zarlaj return hiih shardlaga bhgui???
function tagSuperEfficientCars2(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency < 4) {
      car.tag = "super efficient";
    }
  });
  return cars;
}
const resultCarsTaggedWithSuperEfficient2 = tagSuperEfficientCars2(cars);
console.log(
  "19. Cars Tagged With Super Efficient2: ",
  resultCarsTaggedWithSuperEfficient2
);
