/*------------------ 1016 - Consumo -------------------
                     Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift())

let tempoDistancia = distancia * 2

console.log(tempoDistancia + " minutos")
