/*------------------ 1080 - Maior e Posição -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var maior = 0;

for (var i = 1; i <= 100; i++) {
    var numero = parseInt(lines.shift());
    if(numero > maior){
        maior = numero;
        posicao = i;
    }
}
console.log(maior);
console.log(posicao);