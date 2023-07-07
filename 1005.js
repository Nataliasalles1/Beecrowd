/*------------------ 1005 - Média 1 ------------------*/
/*Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var MEDIA = (A * 3.5 + B * 7.5 )/11.0;

console.log("MEDIA = " + MEDIA.toFixed(5));