/*------------------ 1175 - Troca em vetor I -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = []

for (var i = 0; i < 20; i++) {
	N.push(lines.shift());
}

N.reverse();

for (var i=0; i<20; i++ ){
	console.log("N["+ i+"] = "+N[i])
}

