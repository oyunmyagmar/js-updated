// primitive data types -> string , number, bigInt, boolean, undefined, null
let a = 4;
let b = a;

b = b + 2;
console.log("b", b);
console.log("a", a);
// RAM der tus tusad ni hadgalj bga
// huvisagch bolgon uuriin gsen bairtai [a][b][][][]

// non-primitive data types -> array bolon object
// 2 array usgej bga tohioldold deerh shig hadgaldaggui
let arr = [1, 2, 3];
const newArr = arr;
console.log("newArr", newArr);
console.log("arr", arr);
arr.push(4);
console.log("newArr", newArr);
console.log("arr", arr);

// newArr arr -tai adil 4 bolson bga <- non-primitive type gene
// ygad ingej ijilhen uurchlugduj bga ve?
// newArr usgesen ch RAM der newArr -iig hadgalahgui
// arr -iin position -iig hadgaldag gsen ug
// tsaanaa hadgalj bui zuil ni newArr bish arr uchras

// non-primitive data types -iig clone hiihdee yah ve?
const newArray = [...arr]; // gej bichne
console.log("newArray", newArray);
arr.push(5);
console.log("arr", arr);
console.log("newArr", newArr);
console.log("newArray", newArray);

// ingej davhar uurchlugduj bgag non-primitive type
// ingej davhar uurchlugduhgui bgag primitive type gene
