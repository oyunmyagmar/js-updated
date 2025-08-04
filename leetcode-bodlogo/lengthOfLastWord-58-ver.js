// leetCode 58
let s = "Hello World";
let s1 = "   fly me   to   the moon  ";
let s2 = "luffy is still joyboy";

// 2-r arga
const lengthOfLastWordVer = (s) => {
  // 1. find the last word
  // 2. return last word length
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};
const resultLengthOfLastWordVer = lengthOfLastWordVer(s);
console.log(resultLengthOfLastWordVer);

const resultLengthOfLastWordVer1 = lengthOfLastWordVer(s1);
console.log(resultLengthOfLastWordVer1);

const resultLengthOfLastWordVer2 = lengthOfLastWordVer(s2);
console.log(resultLengthOfLastWordVer2);
