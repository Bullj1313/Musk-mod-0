const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.error("No has introducido un número");
    return;
}
function calcularMatriz(num) {
    let matriz = [];
    let contador = 1;
    for (let i = 0; i < num; i++) {
        matriz[i] = [];
        for (let j = 0; j < num; j++) {
            matriz[i][j] = contador++;
        }
    }
    return matriz;
}
const matriz = calcularMatriz(num);
console.log(matriz);
