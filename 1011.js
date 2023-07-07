/*------------------ 1011 - Esfera -------------------*/
/*Resolução autoral: Natalia Salles                         */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
var pi = 3.14159;
var volume = (4/3) * pi * Math.pow(raio,3);

console.log("VOLUME = " + volume.toFixed(3));