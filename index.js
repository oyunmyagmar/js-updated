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

// leetCode 125 Valid Palindrome
