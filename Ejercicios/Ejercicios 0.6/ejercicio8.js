const readLine = require("readline-sync");

const altura = parseInt(readLine.question("Introduce la altura del rectángulo: "));
const anchura = parseInt(readLine.question("Introduce la anchura del rectángulo: "));

let fila = 1;
while (fila <= altura) {
    let linea = "";
    let columna = 1;

    while (columna <= anchura) {
        if (fila === 1 || fila === altura || columna === 1 || columna === anchura) {
            linea = linea + "*";
        } else {
            linea = linea + " ";
        }


        columna++;
    }

    console.log(linea);
    fila++;
}