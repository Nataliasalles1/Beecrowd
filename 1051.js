/*------------------ 1051 - Imposto de Renda -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var salario = parseFloat(lines.shift());

if (salario >= 0.00 && salario <= 2000) {
    console.log("Isento");
}
else if (salario > 2000 && salario <= 3000){
    saldo = (salario - 2000)*0.08;
    console.log("R$ "+ saldo.toFixed(2))
    
}
else if (salario > 3000 && salario <= 4500){
    saldo = (salario - 3000)*0.18 + (1000*0.08);
    console.log("R$ "+ saldo.toFixed(2))
    
}
else if (salario > 4500){
    saldo = (salario - 4500)*0.28 + (1500*0.18) + (1000 * 0.08);
    console.log("R$ "+ saldo.toFixed(2))
}
