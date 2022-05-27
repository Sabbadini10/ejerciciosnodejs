/* Escribe un programa que reciba uno o más números como argumentos de la
consola e imprima la suma de dichos números a consola(stdout). */

const process = require("process");

let resultado = 0;
for (let i = 2; i < process.argv.length; i++) {
        resultado += +process.argv[i]
}

console.log(resultado)

