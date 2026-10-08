const readline = require("readline-sync");
const input = readline.question("Introduce un texto: ");

function esValida(texto){
    let pila = [];
    let valida = true;
    let parejas =new Map();
        parejas.set(")", "(");
        parejas.set("]", "[");
        parejas.set("}", "{");
    for(const caracter of texto){
        if(caracter === "(" || caracter === "[" || caracter === "{"){
            pila.push(caracter);
        } if(parejas.has(caracter)){
            if(pila.length === 0){
                valida = false;
            } else{
                let apertura = pila.pop();
                if(apertura !== parejas.get(caracter)){
                    valida = false;
                }
            }
        }
    }
    return valida && pila.length === 0
}
const resultado = esValida(input);
if(resultado === true){
    console.log("Secuencia correcta.")
} else{
    console.log("Secuencia incorrecta.")
}