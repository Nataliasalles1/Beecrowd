/*----------- 1066 - Pares, Ímpares, Positivos e Negativos -----------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pares = 0
let impares = 0
let positivos = 0
let negativos = 0

for (let i = 0; i < 5; i++) {
    let numeros = parseInt(lines.shift());

    if (numeros % 2 == 0) {
        pares += 1
    }
    if (numeros % 2 != 0) {
        impares += 1
    }
    if (numeros > 0) {
        positivos += 1
    }
    if (numeros < 0) {
       negativos += 1
    }

}

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");