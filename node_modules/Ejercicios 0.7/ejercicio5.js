const readLine = require("readline-sync");

const input = readLine.question("Introduce una lista de elementos: ");
const elementos = input.split(",");

function buscarRepetidos(array) {
  let repetidos = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !repetidos.includes(array[i])) {
        repetidos.push(array[i]);
      }
    }
  }

  if (repetidos.length === 0) {
    console.log("Todos los elementos son únicos");
  } else {
    console.log("Los elementos repetidos son " + repetidos.join(", "));
  }
}
buscarRepetidos(elementos);
