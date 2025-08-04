// import { color } from "console-log-colors";
// console.log(color.red("Hello World"));

// import { cyan } from "console-log-colors";
// console.log(cyan.bgRed.bold.underline("Hello world!"));

// doorh package import oruldag helber ni type ni module bish umnuh ued hereglegdej bsn import zagvar
// var _ = require('lodash');
// // uuniig odoogiin type module deer bichihdee solih shardlagatai
// var -iin orond import
// = require -iin orond from

// let num = [10, 20, 30, 40];
// import _ from "lodash";
// const numMax = _.max(num);
// console.log(numMax);

// import chalk from "chalk";
// console.log(chalk.green("Hello Word!"));

// golchlon ashiglagddag cases -> doorh 3n case -ees 1-iig ni songoj yavna
// kebab-case
// camelCase
// snake_case

// leetCode 58
let s = "Hello World";
let s1 = "   fly me   to   the moon  ";
let s2 = "luffy is still joyboy";

// 1-r arga
const lengthOfLastWord = (s) => {
  // 1. find the last word
  // 2. return last word length

  // 1. buh char log hiideg for loop bich
  // 2. if(char !== " ") console.log(char)
  // 3. if(char === " ") return
  let lastWordLength = 0;
  let isFindLastWord = false;
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if (char !== " ") {
      isFindLastWord = true;
      lastWordLength++;
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
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};
const resultLengthOfLastWordVer = lengthOfLastWordVer(s);
console.log(resultLengthOfLastWordVer);

const resultLengthOfLastWordVer1 = lengthOfLastWordVer(s1);
console.log(resultLengthOfLastWordVer1);

const resultLengthOfLastWordVer2 = lengthOfLastWordVer(s2);
console.log(resultLengthOfLastWordVer2);

// 125 palindrome too oloh
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const isPalindrome = function (s) {

//     let reversedWord = ""

//     for (let i = s.length - 1; i >= 0; i--) {
//         let reverse = s[i]
//         reversedWord += s[i]
//     } console.log(reversedWord)
//     if (s !== reversedWord) {
//         return false;
//     } else {
//         return true;
//     }

// 90 > s[i].charAtCode(0) > 65
// 122 > s[i].charAtCode(0) > 97
// };
