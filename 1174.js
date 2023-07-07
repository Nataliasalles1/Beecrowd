/*------------------ 1174 - Seleção em Vetor I -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = [];

for (var i = 0; i < 100; i++) {
    A[i] = parseFloat(lines.shift());
    
    if (A[i] <= 10) {
        console.log("A[" + [i] + "] = " + A[i].toFixed(1))
    }
}