/*------------------ 1002 - Área do Círculo ------------------*/ 
/*Resolução autoral: Natalia Salles                         */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());

var pi = 3.14159;

var area =(Math.pow(raio,2) * pi);

console.log("A="+ area.toFixed(4)) 