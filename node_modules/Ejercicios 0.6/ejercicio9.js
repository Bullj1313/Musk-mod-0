const readLine = require("readline-sync");

let num;
let esValido = false;

while (!esValido) {
    const input = readLine.question("Introduce un número del 0 al 10: ");
    num = Number(input);

    if (!isNaN(num) && num >= 0 && num <= 10) {
        esValido = true;
    }
}

let palabra;
switch (num) {
    case 0:
        palabra = "Cero";
        break;
    case 1:
        palabra = "Uno";
        break;
    case 2:
        palabra = "Dos";
        break;
    case 3:
        palabra = "Tres";
        break;
    case 4:
        palabra = "Cuatro";
        break;
    case 5:
        palabra = "Cinco";
        break;                      
    case 6:
        palabra = "Seis";
        break;
    case 7:
        palabra = "Siete";
        break;
    case 8:
        palabra = "Ocho";
        break;
    case 9:
        palabra = "Nueve";
        break;
    case 10:
        palabra = "Diez";
        break;
}

console.log(palabra);