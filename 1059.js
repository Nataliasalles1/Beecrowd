/*------------------ 1059 - Números Pares -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 1;

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
   console.log(i);
}
}