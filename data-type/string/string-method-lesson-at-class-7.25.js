let name = "miga ganbaatar";
// function -> method 2 adilhan, gehdee joohon yalgatai
// js deer function gedg
// java deer method gdeg
// method ni ihenhdee object oriented programming language der hereglegddeg
// string deer method gedeg -> string function gdeggui

name.length;
console.log("name.length = ", name.length);

name.charAt(0); // charAt dugui haallttai
console.log("name.charAt(0) = ", name.charAt(0));
console.log("name.charAt(1) = ", name.charAt(1));

name[1]; // <- method -toi hamaraltai bish -> js deer string -iig array -tai adil gj uzdeg
// array -tai adil bolgohiin tuld useg bolgoniig 1, 1 -eer ni array -iin element bolgoj avch uzej bga
console.log("name[1] = ", name[1]);
console.log("name[2] = ", name[2]);

name.substring(0, 2); // startIndex - inclusive // endIndex -exclusive
console.log("name.substring(0, 2) = ", name.substring(0, 2)); // 0 -ees 2 hurtelh, 2 ni orohgui

name.split(" "); // array bolgodog
console.log('name.split(" ") = ', name.split(" "));

name.split("a"); // a useg bolgon der salgasan
console.log('name.split("a") = ', name.split("a"));

name.split(""); // yugaar salgahaa uguhgui bol useg bolgonoor salgana
console.log('name.split("") = ', name.split(""));
// console.log("name.split("") =" , name.split("")); <- asuudal -> gadna taliig ni '' -eer uurchluh

let text = "Hello world!";
let result = text.repeat(2);
console.log(result);

name.toUpperCase();
console.log("name.toUpperCase() = ", name.toUpperCase());
// neriig tuhain uedee l tom bolgoj bga
console.log("name = ", name);
// neriig tom bolgoy gvel name.charCodeAt() gedgeer hij bolno

console.log("name.trim() = ", name.trim()); // space alga bolgoh
console.log("name.slice(0, 2) = ", name.slice(0, 2)); // tendes tasdah
console.log('name.split("a") = ', name.split("a")); // iim zuileer ni salgah
console.log("name.charAt(0).toUpperCase() = ", name.charAt(0).toUpperCase()); // zuvhun ehnii usgiig tomrulahad
console.log("name.charCodeAt(0) = ", name.charCodeAt(0)); // m gedeg jijig usgiin code ni 109 // ASCII TABLE

// js reserved words : let var const... <- command -uud
// var - umnuh huvibar der ashigladag bsn, let var 2 -iin hoorond scope -iin yalga bdag
// const - uurchilj boldoggui huvisagch zarlahad hereglene <-react der ashiglagdana
const age = 16; // gsen bol age = 18 gj uurchilj boldoggui
