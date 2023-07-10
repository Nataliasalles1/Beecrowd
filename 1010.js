/*------------------ 1010 - Cálculo Simples -------------------*/
/*     Resolução autoral: Natalia Salles                         */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//[12 1 5.30]

let totalValores1 = lines.shift().split(" ")
let totalValores2 = lines.shift().split(" ")

//["12", "1", "5.30"]

let codpeca1 = totalValores1.shift()
let numpeca1 = totalValores1.shift()
let valorUni1 = totalValores1.shift()
let valorTotal1 = numpeca1 * valorUni1


let codpeca2 = totalValores2.shift()
let numpeca2 = totalValores2.shift()
let valorUni2 = totalValores2.shift()
let valorTotal2 = numpeca2 * valorUni2

let = totalPagar = valorTotal1 + valorTotal2

console.log("VALOR A PAGAR: R$ " + totalPagar.toFixed(2))