/*------------------ 1009 - Salário com Bônus -------------------*/
/*     Resolução autoral: Natalia Salles                         */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var total1 = lines.shift().split(" ");
var total2 = lines.shift().split(" ");

var codigoPeca1 = total1.shift();
var numeroPecas1 = total1.shift();
var valorUni1 = total1.shift();
var valorTotal1 = valorUni1 * numeroPecas1;

var codigoPeca2 = total2.shift();
var numeroPecas2 = total2.shift();
var valorUni2 = total2.shift();
var valorTotal2 = valorUni2 * numeroPecas2;

var totalPagar = valorTotal1 + valorTotal2;

console.log("VALOR A PAGAR: R$ " + totalPagar.toFixed(2))