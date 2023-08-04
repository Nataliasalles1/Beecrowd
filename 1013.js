/*------------------ 1013 - O maior -------------------
                     Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [A, B, C] = input.split(' ').map((item) => parseInt(item))

let maiorValor = Math.max(A, B, C)

console.log(maiorValor + " eh o maior")                