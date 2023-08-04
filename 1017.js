/*------------------ 1017 - Gasto de Combustível -------------------
                     Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoGasto = parseInt(lines.shift())
let velocidadeMadia = parseInt(lines.shift())
let kml = 12

let distanciaPecorrida = tempoGasto * velocidadeMadia;

let litro = distanciaPecorrida / kml

console.log(`${litro.toFixed(3)}`)
