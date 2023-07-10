/*------------------ 1008 - Salário -------------------*/
/*Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var salario = parseFloat(lines.shift());

var SALARY = horasTrabalhadas * salario;

console.log("NUMBER = "+numeroFuncionario);
console.log("SALARY = U$ " + SALARY.toFixed(2));