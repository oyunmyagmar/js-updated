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

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.

// option 1
function getUniqueBrands(cars) {
  let arrCarBrands = cars.map((car) => {
    return car.brand;
  });
  let uniqueBrands = [];
  arrCarBrands.forEach((brand) => {
    if (uniqueBrands.includes(brand)) {
    } else {
      uniqueBrands.push(brand);
    }
  });
  return uniqueBrands;
}
const resultUniqueBrands = getUniqueBrands(cars);
console.log("17. Array Of Unique Brands: ", resultUniqueBrands);

// option 2 at class
function getUniqueBrands1(cars) {
  let arrCarBrands = cars.map((car) => {
    return car.brand;
  });
  let uniqueBrands = {};
  arrCarBrands.forEach((brand) => {
    uniqueBrands[brand] = true;
  });
  return Object.keys(uniqueBrands);
}
const resultUniqueBrands1 = getUniqueBrands1(cars);
console.log("17. Array Of Unique Brands1: ", resultUniqueBrands1);
