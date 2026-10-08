const readLine = require("readline-sync");
const frase = readLine.question("Introduce una frase: ");

let contador = 0;
let i = 0;

while (i < frase.length) {
    const letra = frase[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contador++;
    }
    i++;
}

console.log("El número de vocales es " + contador);