/*------------------ 1009 - Salário com Bônus -------------------*/
/*     Resolução autoral: Natalia Salles                         */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var montanteTotal = parseFloat(lines.shift());

var comissao = montanteTotal * 0.15;
var salarioFinal = salarioFixo + comissao;

console.log("TOTAL = R$ "+ salarioFinal.toFixed(2))