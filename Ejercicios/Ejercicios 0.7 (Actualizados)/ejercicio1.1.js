const readline = require("readline-sync");
const input = readline.question("Introduce el numero del radio: ");

const num = parseInt(input);
if (isNaN(num)) {
  console.error("No has introducido un numero.");
  process.exit(1);
}

function calcularCircunsferencia(radio) {
  return 2 * Math.PI * radio;
}
const circunsferencia = calcularCircunsferencia(num);

console.log("La circunsferencia es: " + circunsferencia);
