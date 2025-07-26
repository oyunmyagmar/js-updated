let name = "miga ganbaatar ";
// function -> method // similar
// method in java // usually used in object oriented programming language
// function in js
// string deer method gedeg

console.log(name.length);
console.log("name.length =", name.length);

console.log(name.charAt(0)); // charAt dugui haallttai
console.log("name.charAt(0) =", name.charAt(0));

console.log(name.charAt(3));
console.log("name.charAt(0) =", name.charAt(3));

console.log(name[1]); // js deer string -iig array -tai adil gj uzdeg
// array -tai adil bolgohiin tuld useg bolgoniig 1, 1 -eer ni array -iin element bolgoj avch uzej bga
console.log("name[1] =", name[1]);

console.log(name[2]);
console.log("name[2] =", name[2]);

console.log(name.substring(0, 2)); // startIndex - inclusive // endIndex -exclusive
console.log("name.substring(0, 2) =", name.substring(0, 2)); // 0 -ees 2 hurtelh, 2 ni orohgui

console.log(name.split(" ")); // array bolgodog
console.log('name.split(" ") =', name.split(" "));

console.log(name.split("a")); // a useg bolgon der salgasan
console.log('name.split("a") =', name.split("a"));

console.log(name.split("")); // yugaar salgahaa uguhgui bol useg bolgonoor salgana
console.log('name.split("") =', name.split(""));
// console.log("name.split("") =", name.split(""));  <- asuudal -> gadna taliig ni '' uurchluh

console.log(name.toUpperCase());
console.log("name.toUpperCase() =", name.toUpperCase());

console.log(name.trim()); // space alga bolgoh
console.log(name.slice(0, 2)); // tendes tasdah
console.log(name.split("a")); // iim zuileer ni salgah
console.log(name.charAt(0).toUpperCase()); // zuvhun ehnii usgiig tomrulahad
console.log(name.charCodeAt(0)); // m gedeg jijig usgiin code ni 109 // ASCII TABLE
