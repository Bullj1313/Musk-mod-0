const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
let fila = 1;
while (fila <= num) {
    linea = "";
    let espacios = num - fila;
    let asteriscos = fila * 2 - 1;
    
    while (espacios > 0) {
        linea = " " + linea;
        espacios--;
    }
        while (asteriscos > 0) {
            linea = linea + "*";
            asteriscos--;
        }
        
    
    console.log(linea);
    fila++;
}

