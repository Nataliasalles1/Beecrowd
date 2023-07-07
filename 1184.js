/*------------------ 1184 - Abaixo da Diagonal Principal -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var O = lines.shift();
var operacao = O.split("");
var matriz = [];
var soma = 0;

for (var linha = 0; linha<12; linha++){
    var vetorDadosLinhas = [];
    for(var coluna=0; coluna<12; coluna++){
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