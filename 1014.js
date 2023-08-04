/*------------------ 1014 - Consumo Mádio -------------------
                     Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distanciaTotal = parseInt(lines.shift())
let totalCombustivel = parseFloat(lines.shift())

let consumoMedio = distanciaTotal / totalCombustivel

console.log(`${consumoMedio.toFixed(3)} km/l`)

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x1y1 = lines.shift().split(" ");
var x2y2 = lines.shift().split(" ");

var x1 = x1y1.shift();
var y1 = x1y1.shift();
var x2 = x2y2.shift();
var y2 = x2y2.shift();

var distancia = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

console.log(distancia.toFixed(4));