const readLine = require("readline-sync");

const input = readLine.question("Introduce números del 1 al 20 separados por espacios: ");

function Calculo(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let media = suma / numeros.length;

    console.log("La suma de los números es: " + suma);
    console.log("La media de los números es: " + media);
}

const numeros = input.split(" ").map(Number);
    

Calculo(numeros);


