const readLine = require("readline-sync");

const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo!");

let intentos = 0;
let acertado = false;

while (!acertado) {
    const input = readLine.question("Introduce un número: ");
    const num = parseInt(input);

    if (num === randomNumber) {
        acertado = true;
    } else {
        console.log("¡Fallo!");
        intentos++;
    }
}

if (acertado) {
    console.log(`¡Felicidades! Has adivinado el número ${randomNumber}, has necesitado ${intentos} intentos.`);
}


