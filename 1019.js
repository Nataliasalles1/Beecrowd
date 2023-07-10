/*------------------ 1019 - Conversão de Tempo -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let totalSegundos = parseInt(lines.shift());

let qtdHoras = totalSegundos / 3600;
totalSegundos = totalSegundos % 3600;
		
let qtdMinutos = totalSegundos / 60;
totalSegundos = totalSegundos % 60;
		
let qtdSegundos = totalSegundos;

console.log(Math.floor(qtdHoras)+ ":" + Math.floor(qtdMinutos) + ":" + Math.floor(qtdSegundos));

