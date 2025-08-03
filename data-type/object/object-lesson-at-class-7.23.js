// ugugdliin turul:
// string
// number
// boolean
// undefined
// null
// object {curly bracket}-r ehled {curly bracket}-r dusna

// object ni {property: value ,} 2-oos burdene
let student = {
  lastName: "ganbaatar",
  firstName: "miga", // , tavina // , ni  uunees tsaash bas uijil zuil urgeljilne gedgig helj ugnu
  age: 35, // property bolgon bidnii uzsen data turlur todorhoilogdono
  grade: 90,
  gender: "male",
  class: "3a",
}; // ; ni tuhain statement tugsuj bgag ilerhiilne, tugsgul
student.age = 17; // . -eer object -iin property -iin utgiig uurchilj bolno
student["age"] = 20; // uuruur bas object -iin property -ruu nevterch orj bolno
student.status = "Active"; // .status ged status gsen nertei, "Active" gsen utgatai shine buyu bhgui bsan property nemj bolno

console.log(student.age);
// object -iin property -ruu nevtrehdee . -eer nevtrene
// uuruur helbel, object -iin property -iin utgiig avch bolno
console.log(student.status);
console.log(student); // object -oor garch irne

let building = {
  name: "3n gol",
  floor: 6,
  color: "black",
};
console.log(building);
