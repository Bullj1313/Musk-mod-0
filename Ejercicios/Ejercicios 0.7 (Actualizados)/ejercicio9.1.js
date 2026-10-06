const readline = require("readline-sync");
const input = readline.question("Introduce un numero: ");

const num = parseInt(input);

if (isNaN(num)) {
  console.error("No has introducido un numero.");
} else {
    const resultado = crearMatrizProductos(num);
    console.log("La matriz cuadrada de tu numero es: " , resultado);
}

function crearMatrizProductos(numero) {
  let matriz = [];
  for (let i = 0; i < numero; i++) {
    let filaActual = [];
  
  for (let j = 0; j < numero; j++) {
    filaActual.push(i * j);
  }
  matriz.push(filaActual);
}
return matriz;
}
