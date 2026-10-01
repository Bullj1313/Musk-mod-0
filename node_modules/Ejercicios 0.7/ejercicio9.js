const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.log("No has introducido un número");
    return;
}
function calcularMatriz(numero) {
    let matriz = [];
    for (let i = 0; i < numero; i++) {
        matriz[i] = [];
        for (let j = 0; j < numero; j++) {
            matriz[i][j] = i * j;
        }
    }
    return matriz;
}

const resultado = calcularMatriz(num);

for ( let i = 0; i < resultado.length; i++) {
    console.log(resultado[i])

}

