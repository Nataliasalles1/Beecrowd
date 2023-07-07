/*------------------ 1180 - Menor e Posição -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = lines.shift();
var numero = lines.shift();

var arraynumeros = numero.split(" ")

var posicao = 0
var menor = parseInt(arraynumeros[0])

for (var i = 0; i < N; i++) {
    if (parseInt(arraynumeros[i]) < menor) {
        menor = parseInt(arraynumeros[i]);
        posicao = i;
    }
}
console.log("Menor valor: " + menor);
console.log("Posicao: " + posicao);


