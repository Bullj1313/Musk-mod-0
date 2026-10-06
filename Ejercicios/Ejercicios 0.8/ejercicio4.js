const readline = require("readline-sync");
const input = readline.question("Introduce una palabra: ");
const input2 = readline.question("Introduce otra palabra: ");

function sonAnagramas(cadena1, cadena2){
    let mapa = new Map();
    for(const caracter of cadena1){
        if(mapa.has(caracter) === false){
            mapa.set(caracter, 1)
        } else{
            mapa.set(caracter, mapa.get(caracter) + 1)
        }
    }
    for(const caracter of cadena2){
        if(mapa.has(caracter) === false){
            mapa.set(caracter, -1)
        } else{
            mapa.set(caracter, mapa.get(caracter) - 1)
        }
    }
    let resultAnagramas = true;
    for(const valor of mapa.values()){
        if(valor !== 0){
            resultAnagramas = false;
        }
    }
    return resultAnagramas;
}

const resultado = sonAnagramas(input, input2);
if(resultado === true){
    console.log("Las palabras son anagramas");
} else {
    console.log("Las palabras no son anagramas");
}