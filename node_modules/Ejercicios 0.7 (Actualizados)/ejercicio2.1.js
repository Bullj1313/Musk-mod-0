const readline = require("readline-sync");
const input = readline.question("Introduce el numero del radio del circulo: ");

const num = parseInt(input);
if (isNaN(input)) {
  console.error("No has introducido un numero.");
  process.exit(1);
}

function calcularArea(radio) {
  return Math.PI * radio ** 2;
}
const area = calcularArea(num);
console.log("El area del circulo es: " + area);
