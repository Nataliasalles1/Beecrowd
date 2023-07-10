/*------------------ 1183 - Acima da Diagonal Principal -------------------
         Resolução autoral: Natalia Salles                    */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let O = lines.shift();
let operacao = O.split("");
let matriz = [];
let soma = 0;

for (let linha = 0; linha<12; linha++){
    let vetorDadosLinhas = [];

    for(let coluna=0; coluna<12; coluna++){
        vetorDadosLinhas.push(parseFloat(lines.shift()));
        if(coluna >= linha+1){
            soma += vetorDadosLinhas[coluna];
        }
    }
    matriz.push(vetorDadosLinhas)
}

if(operacao == "S"){
    console.log(soma.toFixed(1))
}else{
    console.log((soma/66).toFixed(1))
}