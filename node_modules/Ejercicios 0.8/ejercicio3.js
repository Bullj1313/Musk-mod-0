const readline = require("readline-sync");
const input = readline.question("Introduce un texto: ");

function separarMapeado(string){

    let mapa = new Map();
    for(const caracter of string){
        if (!mapa.has(caracter)){
            mapa.set(caracter, 1)
        } else{
            mapa.set(caracter, mapa.get(caracter) + 1)
        }
    }
    return mapa;
}
const resultado = separarMapeado(input);
console.log("El mapa de frecuencias es:", resultado);