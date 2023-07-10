/*------------------ 1759 - Ho Ho Ho -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let repeticao = parseInt(lines.shift());
let arrayHo = []

for (let i = 0; i < repeticao; i++) {
    arrayHo.push("Ho");

}
let textoFinal = arrayHo.join(" ") + "!"
console.log(textoFinal);