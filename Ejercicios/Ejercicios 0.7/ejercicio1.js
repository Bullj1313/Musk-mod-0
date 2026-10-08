const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.error("No has introducido un número");
}
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}
const circunferencia = calcularCircunferencia(num);
console.log("La circunferencia  " + "es: " + circunferencia);
