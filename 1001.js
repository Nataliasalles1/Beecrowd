/*---------------- 1001 - Extremamente Básico ---------------- */
/*Resolução autoral: Natalia Salles                         */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var soma = A + B;

console.log("X = " + soma)
