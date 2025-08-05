// leetcode 125 Valid Palindrome

let s = "A man, a plan, a canal: Panama";
let s1 = "race a car";
let s2 = " ";

// 2-r arga

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let palindrome = "";
  let reversed = "";
  for (let i = 0; i < s.length; i++) {
    if (90 > s[i].charCodeAt(0) > 65 || 122 > s[i].charCodeAt > 97) {
      palindrome += s[i];
    }
  }
  for (let i = palindrome.length - 1; i >= 0; i--) {
    reversed += palindrome[i];
  }
  if (palindrome == reversed) {
    return true;
  } else {
    return false;
  }
};
let result = isPalindrome(s);
console.log(result);

let result1 = isPalindrome(s1);
console.log(result1);

let result2 = isPalindrome(s2);
console.log(result2);
//   let reversedWord = "";

//   for (let i = s.length - 1; i >= 0; i--) {

//     let reversedChar = s[i];
//     reversedWord += reversedChar;
//   }
//   if (s !== reversedWord) {
//     return false;
//   } else {
//     return true;
//   }

//   // 90 > s[i].charAtCode(0) > 65;
//   // 122 > s[i].charAtCode(0) > 97

// arga
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const isPalindrome = function (s) {
//   // 1. convert all uppercase letters into lowercase
//   // 2. remove all non-alphanumeric characters
//   // if s == palindrome -> : true
//   // if s !== palindrome -> : false
//   // s consists only of printable ASCII characters.
//   let sLowerCase = s.toLowercase();
//   console.log(sLowerCase);
// };

// 90 > s[i].charAtCode(0) > 65
// 122 > s[i].charAtCode(0) > 97
