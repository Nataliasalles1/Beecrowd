/*------------------ 1177 - Preencimento de vetor II -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());
var N = [];

for (var i = 0; i < 10; i++) {
   N[i] = i%valor

    console.log("N[" + [i] + "] = " + N[i])
    

}