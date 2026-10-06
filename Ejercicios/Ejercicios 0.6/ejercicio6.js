const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.error("No has introducido un número");
} else {
    let mensaje = `El número es ${num}`;
    if (num % 400 === 0) {
        mensaje += ", es Bisiesto";
    } else if (num % 100 === 0) {
        mensaje += ", no es Bisiesto";
    } else if (num % 4 === 0) {
        mensaje += ", es Bisiesto";
    } else {
        mensaje += ", no es Bisiesto";
    }
    console.log(mensaje);
}