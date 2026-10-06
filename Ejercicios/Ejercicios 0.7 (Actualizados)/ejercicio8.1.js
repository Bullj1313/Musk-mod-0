const readline = require("readline-sync");
const input = readline.question("Introduce un texto: ");

function esPalindromo(texto) {
  const textoSinEspacios = texto.toLowerCase().split(" ").join("");
  const textoReverso = textoSinEspacios.split("").reverse().join("");
  if (textoSinEspacios === textoReverso) {
    return true;
  } else {
    return false;
  }
}
const esPalindromoResult = esPalindromo(input);
if (esPalindromoResult) {
  console.log("El texto introducido es palindromo.");
} else {
  console.log("El texto introducido no es palindromo.");
}
