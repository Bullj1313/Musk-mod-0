const readline = require("readline-sync");
const input = readline.question(
  "Introduce un ARRAY de numeros separados por , : ",
);

const numeros = input.split(",");
const arrayNuevo = numeros.map(function (convertir) {
  return Number(convertir);
});

function calcularSuma(arrayNuevo) {
  let suma = 0;
  for (let i = 0; i < arrayNuevo.length; i++) {
    suma = suma + arrayNuevo[i];
  }
  const media = suma / arrayNuevo.length;
console.log("La suma de los elementos es: " + suma);
console.log("La media de la suma de los elementos es: " + media);
}
calcularSuma(arrayNuevo);

