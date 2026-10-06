const readline = require("readline-sync");
const input = readline.question("Introduce un texto: ");


function estanBalanceados(texto){
    let pila = [];
    let balanceados = true;
    for(const caracter of texto){
        if(caracter === "("){
            pila.push(caracter);
        } if(caracter === ")"){
            if(pila.length === 0){
                balanceados = false;
            } else{
                pila.pop()
            }
        }
    }
    return balanceados && pila.length === 0;
}
const resultado = estanBalanceados(input);
if (resultado === true){
    console.log("Estan balanceados.")
} else{
    console.log("No estan balanceados.")
}