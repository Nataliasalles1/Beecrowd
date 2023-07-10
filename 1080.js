/*------------------ 1080 - Maior e Posição -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let maior = 0;

for (let i = 1; i <= 100; i++) {
    let numero = parseInt(lines.shift());
    if(numero > maior){
        maior = numero;
        posicao = i;
    }
}
console.log(maior);
console.log(posicao);