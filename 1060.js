/*------------------ 1060 - Números Positivos -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = 0;

for (var i = 0; i < 6; i++) {
    var numero = parseFloat(lines.shift());
    if (numero > 0) {
        valor++;
    }
}
console.log(valor + " valores positivos")