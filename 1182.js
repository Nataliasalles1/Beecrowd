/*------------------ 1182 - Coluna na Matriz -------------------
         Resolução autoral: NataliaSalles1                  */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let C = parseInt(lines.shift());
let T = lines.shift();
let operacao = T.split("");

let M = [];
let soma = parseFloat(0), media = parseFloat(0);

for (let i = 0; i < 12; i++) {
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
for (let i = 0; i < 12; i++) {
    soma = parseFloat(soma + M[i][C]);
}

media = soma / 12;

switch (operacao[0]) {
    case "S":
        console.log(soma.toFixed(1));
        break;
    case "M":
        console.log(media.toFixed(1));
        break;
}