const readLine = require("readline-sync");

const input = readLine.question("Introduce la matriz (filas separadas por \";\", números por espacios): ");

const filasTexto = input.split(";");
let matriz = [];



for (let i = 0; i < filasTexto.length; i++) {
    const filaNumeros = filasTexto[i].trim().split(" ").map(Number);
        matriz.push(filaNumeros);
}
    function transponer(matriz) {
        const filas = matriz.length;
        const columnas = matriz[0].length;
        let transpuesta = [];
        for (let i = 0; i < columnas; i++) {
            transpuesta[i] = [];
        }
        for (let fila = 0; fila < filas; fila++) {
            for ( let col = 0; col < columnas; col++) {
                transpuesta[col][fila] = matriz[fila][col];
            }
        }
        return transpuesta;
    
}

console.log(transponer(matriz));