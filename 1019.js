/*------------------ 1019 - Conversão de Tempo -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var totalSegundos = parseInt(lines.shift());

var qtdHoras = totalSegundos / 3600;
totalSegundos = totalSegundos % 3600;
		
var qtdMinutos = totalSegundos / 60;
totalSegundos = totalSegundos % 60;
		
var qtdSegundos = totalSegundos;

console.log(Math.floor(qtdHoras)+ ":" + Math.floor(qtdMinutos) + ":" + Math.floor(qtdSegundos));

