const readline = require("readline-sync");
const input = readline.question(
  "Introduce un ARRAY de elementos separados por , :",
);

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
    console.log("Todos los elementos son unicos.");
  } else {
    console.log("Los elementos repetidos son: " + repetidos.join(", "));
  }
}
buscarRepetidos(elementos);
