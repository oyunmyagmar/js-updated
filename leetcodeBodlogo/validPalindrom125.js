// leetcode 125 Valid Palindrome

let s = "A man, a plan, a canal: Panama";
let s1 = "race a car";
let s2 = " ";

// 1-r arga

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

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let nonAlphanumericChar = /[^a-zA-Z0-9_]/g;
  let palindrome = s
    .toLowerCase()
    .replaceAll(nonAlphanumericChar, "")
    .replaceAll("_", "");
  let reversed = "";
  for (let i = palindrome.length - 1; i >= 0; i--) {
    reversed += palindrome[i];
  }
  if (palindrome == reversed) {
    return true;
  } else {
    return false;
  }
};
const result = isPalindrome(s);
console.log(result);

const result1 = isPalindrome(s1);
console.log(result1);

const result2 = isPalindrome(s2);
console.log(result2);
