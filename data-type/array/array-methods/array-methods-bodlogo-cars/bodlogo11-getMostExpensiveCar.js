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
    model: "Toyota Prius",
    type: "Hybrid",
    price: 85000000,
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

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let mostExpensiveCar = cars[0];
  cars.forEach((car) => {
    if (mostExpensiveCar.price < car.price) {
      mostExpensiveCar = car;
    }
  });
  return mostExpensiveCar;
}
const resultMostExpensiveCar = getMostExpensiveCar(cars);
console.log("11. Most Expensive Car: ", resultMostExpensiveCar);

// price ni ijil hamgiin undur bh 2 mashin bval hamgiin ehniihiig ni gargaj bga uchit map -aar hiiv -> ???zuv eseh???
function getMostExpensiveCar1(cars) {
  let mostExpensiveCar = cars[0];
  cars.map((car) => {
    if (mostExpensiveCar.price < car.price) {
      mostExpensiveCar = car;
    }
  });
  return mostExpensiveCar;
}
const resultMostExpensiveCar1 = getMostExpensiveCar1(cars);
console.log("11. Most Expensive Car1: ", resultMostExpensiveCar1);

// ???filter-eer bas bloh ni???
