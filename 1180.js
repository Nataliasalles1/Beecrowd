/*------------------ 1180 - Menor e Posição -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = lines.shift();
let numero = lines.shift();

let arraynumeros = numero.split(" ")

let posicao = 0
let menor = parseInt(arraynumeros[0])

for (let i = 0; i < N; i++) {
    if (parseInt(arraynumeros[i]) < menor) {
        menor = parseInt(arraynumeros[i]);
        posicao = i;
    }
}
console.log("Menor valor: " + menor);
console.log("Posicao: " + posicao);


