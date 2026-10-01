const readLine = require("readline-sync");

const input = readLine.question("Introduce un texto: ");

function esPalindromo(texto) {
    const textoSinEspacios = texto.replace(/\s/g, "").toLowerCase();
    const textoReverso = textoSinEspacios.split("").reverse().join("");
    return textoSinEspacios === textoReverso;

}
console.log(esPalindromo(input) === true ? "El texto es un palíndromo." : "El texto no es un palíndromo." );
