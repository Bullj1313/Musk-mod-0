const readline = require("readline-sync");
const input = readline.question("Introduce una palabra: ");

function invertirPalabras(palabra){
    let pila = [];
    for(const caracter of palabra){
        pila.push(caracter);
    }
    let invertida = [];
    while(pila.length !== 0){
        let letra = pila.pop();
        invertida.push(letra);
    }
    invertida = invertida.join("");
    return invertida;
}
const resultado = invertirPalabras(input);
console.log("La palabra invertida es: ", resultado)