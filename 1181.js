/*------------------ 1181 - Linha na Matriz -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let L = parseInt(lines.shift());
let T = lines.shift();
let separarT = T.split("");

let M = [];
let soma=parseFloat(0), media=parseFloat(0);

for(let i=0; i<12; i++){
    let um = parseFloat(lines.shift());
    let dois = parseFloat(lines.shift());
    let tres = parseFloat(lines.shift());
    let quatro = parseFloat(lines.shift());
    let cinco = parseFloat(lines.shift());
    let seis = parseFloat(lines.shift());
    let sete = parseFloat(lines.shift());
    let oito = parseFloat(lines.shift());
    let nove = parseFloat(lines.shift());
    let dez = parseFloat(lines.shift());
    let onze = parseFloat(lines.shift());
    let doze = parseFloat(lines.shift());

    M.push([um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze]);

}

for(let i=0; i<12; i++){
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