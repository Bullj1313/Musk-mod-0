const readLine = require("readline-sync");

const input = readLine.question("Introduce un texto: ");

function separarPalabras(texto) {
    let matriz = [];
    let fila = [];
    const palabras = texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        fila.push(palabras[i]);
        if (fila.length === 5) {
            matriz.push(fila);
            fila = [];
        }
    }
    if (fila.length > 0) {
        matriz.push(fila);
    }
    return (matriz);
}
console.log(separarPalabras(input));
