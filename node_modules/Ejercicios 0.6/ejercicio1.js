const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.error("No has introducido un número");
} else {
    let mensaje = `El número es ${num}`;

    if (num % 2 === 0) {
        mensaje += ", es PAR";
    } else {
        mensaje += ", es IMPAR";
    }
    if (num > 0) {
        mensaje += " y POSITIVO";
    } else if (num < 0) {
        mensaje += " y NEGATIVO";
    } else {
        mensaje += " y es CERO";
    }

    console.log(mensaje);
}
