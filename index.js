// 8.4 nodejs

import { color } from "console-log-colors";
console.log(color.red("Hello World"));

import { cyan } from "console-log-colors";
console.log(cyan.bgRed.bold.underline("Hello world!"));

// gol code ni -> var _ = require('lodash');
// iim bichiglel uzegui
// type ni common.json bh ued ajildag bichiglel
// uuniig module bolgoj uurchilsun -> tgeher saynii code -iig deerh syntax -ruu hurvuulne

// var -iin orond import gdg text bichne
// import -iin araas _ bichne
// = require -iin orond from -oo bichne
// ( ) haaltgui, "lodash" gj bichne

let num = [10, 20, 30, 40];
import _ from "lodash";
const max = _.max(num);
console.log(max);

const min = _.min([3, 87, 53, 1, 2, 3]); // array ugnu
console.log(min);

const add = _.add(16, 4);
console.log(add);

import chalk from "chalk";
console.log(chalk.green("Hello Word!"));

// naming conventions -> cases
// elbeg ashiglagddag 3 turliin case bn
// kebab-case
// camelCase
// snake_case
// edgeeriin ali negiig ni songoj hugjuulelted ashigladag
// holij bichiheer bagaaraa yum hiihed oilgomjgui boldog
// esvel company -nii ashigladag ni ali ni bgagas hamarad ter durmiig murdunu gsn ug

// leetCode 58 Length of Last Word
let s = "Hello World";
let s1 = "   fly me   to   the moon  ";
let s2 = "luffy is still joyboy";

// 1-r arga
const lengthOfLastWord = (s) => {
  // 1. find the last word
  // 2. return last word length

  // 1. buh char log hiideg for loop bich -> davtaltaa hoid talaas ni ehluleh
  // 2. if(char !== " ") console.log(char) -> hooson bish ued char -iig hevleh
  // suulees suuliin ug gedgig yaj mdeh ve? -> hooson string hurtel yavna -> hooson string bolbol suuliin ug duusna
  // if char == " " bval ter ued return der davtaltiin toog ugnu, count huvisagch ugch bolno, esvel length -ees i -iig hasch bolno
  // 3. if(char === " ") return
  let lastWordLength = 0;
  let isFindLastWord = false;
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if (char !== " ") {
      isFindLastWord = true;
      lastWordLength++;
      // console.log(s[i]);
    } else {
      if (isFindLastWord) {
        return lastWordLength;
      }
    }
  }
};
const resultLengthOfLastWord = lengthOfLastWord(s);
console.log(resultLengthOfLastWord);

const resultLengthOfLastWord1 = lengthOfLastWord(s1);
console.log(resultLengthOfLastWord1);

const resultLengthOfLastWord2 = lengthOfLastWord(s2);
console.log(resultLengthOfLastWord2);

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

// leetCode 125 Valid Palindrome

let spal = "A man, a plan, a canal: Panama";
let spal1 = "race a car";
let spal2 = " ";
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
const result = isPalindrome(spal);
console.log(result);

const result1 = isPalindrome(spal1);
console.log(result1);

const result2 = isPalindrome(spal2);
console.log(result2);
