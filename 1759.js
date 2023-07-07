/*------------------ 1759 - Ho Ho Ho -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var repeticao = parseInt(lines.shift());
var arrayHo = []

for (var i = 0; i < repeticao; i++) {
    arrayHo.push("Ho");

}
var textoFinal = arrayHo.join(" ") + "!"
console.log(textoFinal);