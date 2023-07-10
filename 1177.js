/*------------------ 1177 - Preencimento de vetor II -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
let N = [];

for (let i = 0; i < 10; i++) {
   N[i] = i%valor

    console.log("N[" + [i] + "] = " + N[i])
    

}