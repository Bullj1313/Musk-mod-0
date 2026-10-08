const readline = require("readline-sync");
const input = readline.question("Introduce un texto: ");

function estanRepetidas(texto) {
    const palabras = texto.toLowerCase().split(" ").map(function(palabra) {
        return palabra.replace(",", "").replace(".", "");
    });
    let contador = {};

    for (const palabra of palabras) {
        if (contador[palabra] === undefined) {
            contador[palabra] = 1;
        } else {
            contador[palabra] = contador[palabra] + 1;
        }
    }

    const repetidas = Object.keys(contador).filter(function(palabra) {
        return contador[palabra] > 1;
    });

    if (repetidas.length === 0) {
        console.log("Todos los elementos son únicos");
    } else {
        console.log("Las palabras repetidas son: " + repetidas.join(", "));
    }
}
estanRepetidas(input);
