const readline = require("readline-sync");
const input = readline.question(
  "Introduce un texto, palabra por palabra separadas por espacios: ",
);

function crearMatrizPalabras(texto) {
  let matriz = [];
  let palabras = texto.split(" ");
  let filaActual = [];
  for (const palabra of palabras) {
    filaActual.push(palabra);
    if (filaActual.length === 5) {
      matriz.push(filaActual);
      filaActual = [];
    }
  }
  if (filaActual.length > 0) {
    matriz.push(filaActual);
  }
  return (matriz);
}
const resultado = crearMatrizPalabras(input);
console.log(resultado);
