/*------------------ 1036 - Fórmula de Bhaskara -------------------
         Resolução autoral: Natalia Salles                    */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [A, B, C] = input.split(' ').map(item => parseFloat(item))

let delta = (Math.pow(B,2)) - (4 * A * C)

let R1 = (-B + Math.sqrt(delta)) / (2 * A)
let R2 = (-B - Math.sqrt(delta)) / (2 * A)

if(delta > 0 && A > 0){
    console.log(`R1 = ${R1.toFixed(5)}`)
    console.log(`R2 = ${R2.toFixed(5)}`)
}else{
    console.log(`Impossivel calcular`)
}