// 8.4 nodejs

import { color } from "console-log-colors";
console.log(color.red("Hello World"));

import { cyan } from "console-log-colors";
console.log(cyan.bgRed.bold.underline("Hello world!"));

// doorh package import oruldag helber ni type ni module bish umnuh ued hereglegdej bsn import zagvar
// var _ = require('lodash');
// uuniig odoogiin type module deer bichihdee solih shardlagatai
// var -iin orond import
// = require -iin orond from
// ( ) haaltgui bichne

let num = [10, 20, 30, 40];
import _ from "lodash";
const numMax = _.max(num);
console.log(numMax);

import chalk from "chalk";
console.log(chalk.green("Hello Word!"));

// naming conventions used in programming
// golchlon ashiglagddag cases -> doorh 3n case -ees 1-iig ni songoj yavna
// kebab-case
// camelCase
// snake_case
