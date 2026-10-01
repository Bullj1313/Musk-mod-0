const readline = require("readline-sync");
const input = readline.question(
  "Introduce 1 numero para crear una matriz cuadrada: ",
);

const num = parseInt(input);
if (isNaN(num)) {
  console.error("No has introducido un numero");
} else {
  const resultado = crearMatriz(num);
  console.log("La matriz cuadrada es: ", resultado);
}

function crearMatriz(numero) {
  let matriz = [];
  let contador = 1;
  for (let i = 0; i < numero; i++) {
    let filaActual = [];

    for (let j = 0; j < numero; j++) {
      filaActual.push(contador);
      contador++;
    }
    matriz.push(filaActual);
  }
  return matriz;
}
