/*------------------ 1181 - Linha na Matriz -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var L = parseInt(lines.shift());
var T = lines.shift();
var separarT = T.split("");

var M = [];
var soma=parseFloat(0), media=parseFloat(0);

for(var i=0; i<12; i++){
    var um = parseFloat(lines.shift());
    var dois = parseFloat(lines.shift());
    var tres = parseFloat(lines.shift());
    var quatro = parseFloat(lines.shift());
    var cinco = parseFloat(lines.shift());
    var seis = parseFloat(lines.shift());
    var sete = parseFloat(lines.shift());
    var oito = parseFloat(lines.shift());
    var nove = parseFloat(lines.shift());
    var dez = parseFloat(lines.shift());
    var onze = parseFloat(lines.shift());
    var doze = parseFloat(lines.shift());

    M.push([um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze]);

}

for(var i=0; i<12; i++){
    soma = parseFloat(soma+M[L][i]);
}

media = soma/12;


switch(separarT[0]){
    case "S":
        console.log(soma.toFixed(1));
        break;
    case "M":
        console.log(media.toFixed(1));
        break;
}