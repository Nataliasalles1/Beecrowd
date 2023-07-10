/*------------------ 1178 - Preenchimento de Vetor III -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseFloat(lines.shift());
let obterN = parseFloat(X);
N = [];

for(let i=0; i<100; i++){
    if(i==0){
        N.push(obterN);
        console.log("N["+i+"] = "+N[i].toFixed(4));
    }else{
        obterN = obterN/2;
        N.push(obterN);
        console.log("N["+i+"] = "+N[i].toLocaleString('en-US',{minimumFractionDigits:4, useGrouping:false}));
    }
}