/*------------------ 1004 - Produto Simples ------------------*/
/*Resolução autoral: Natalia Salles                         */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var v1 = parseInt(lines.shift());
var v2 = parseInt(lines.shift());

var PROD = (v1*v2);

console.log("PROD = " + PROD)