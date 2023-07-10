/*------------------ 1172 - Substituição em Vetor I -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = [];

for (let i = 0; i < 10; i++) {
    X[i] = parseInt(lines.shift());
    
    if (X[i] < 0 || X[i] === 0) {
        X[i] = 1
        console.log("X[" + [i] + "] = " + X[i])
    }else{
        console.log("X[" + [i] + "] = " + X[i])
    }
}