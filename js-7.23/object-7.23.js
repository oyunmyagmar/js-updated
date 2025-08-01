// string
// number
// boolean
// undefined
// null
// object {curly bracket}

let student = {
  lastname: "", // property: value ,
  firstname: "Miga", // , -> uunees tsaash ch bas property urgeljilne gedgig helj ugnu
  age: 16, // property bolgon bidnii umnu uzsen turludes togtono
  grade: 90,
  gender: "male",
  class: "3a",
};
student.age = 17; // . ged tuhain property-iig avaad uurchilj bolno
student["age"] = 20; // ; -> tuhain statement tugsuj bgag ilerhiilne
student.status = "Active"; // . ged ner uguud/status/ shine property nemj bolno

console.log(student.age); // . ged zuvhun 1 property-iig avahad
console.log(student.status);
console.log(student); // object -oor garch irne

let building = {
  name: "",
  floor: 6,
  color: "black",
};

console.log(building);
