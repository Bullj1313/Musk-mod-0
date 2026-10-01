const readline = require("readline-sync");
const input = readline.question("Introduce el radio del circulo: ");
const num = parseInt(input);

if (isNaN(input)) {
  console.error("No has introducido un numero.");
  process.exit(1);
}

function calcularCircunsferenciaArea(radio) {
 const circunsferencia = 2 * Math.PI * radio;
 const area = Math.PI * radio ** 2;
console.log("La circunsferencia del circulo es: " + circunsferencia);
console.log("El area del circulo es: " + area);
}
 calcularCircunsferenciaArea(input);
