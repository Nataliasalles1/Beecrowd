/*------------------ 1178 - Preenchimento de Vetor III -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseFloat(lines.shift());
var obterN = parseFloat(X);
N = [];

for(var i=0; i<100; i++){
    if(i==0){
        N.push(obterN);
        console.log("N["+i+"] = "+N[i].toFixed(4));
    }else{
        obterN = obterN/2;
        N.push(obterN);
        console.log("N["+i+"] = "+N[i].toLocaleString('en-US',{minimumFractionDigits:4, useGrouping:false}));
    }
}