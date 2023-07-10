/*------------------ 1011 - Esfera -------------------*/
/*Resolução autoral: Natalia Salles                         */

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let raio = parseFloat(lines.shift());
let pi = 3.14159;
let volume = (4/3) * pi * Math.pow(raio,3);

console.log("VOLUME = " + volume.toFixed(3));