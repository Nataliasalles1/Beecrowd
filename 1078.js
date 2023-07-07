/*------------------ 1078 - Tabuada -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift());

for (var i = 1; i <= 10; i++) {

     var produto = i * numero;

    console.log(i+ " x " + numero +" = " + produto);
   
}