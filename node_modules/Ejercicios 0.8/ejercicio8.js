const readline = require("readline-sync");
const input = readline.question("Introduce un numero: ");

const num = parseInt(input);
if (isNaN(num)) {
  console.error("No has introducido un numero");
} else {
  const resultado = esPrimo(num);
  if(resultado === true){
    console.log(num, " es primo.");
  } else{
    console.log(num, " no es primo.")
  }
}

function esPrimo(n){
    let resPrimo = true;
    if(n === 1){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            resPrimo = false;
        }
    }
    return resPrimo;
}