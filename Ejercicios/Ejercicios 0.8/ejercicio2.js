function generarArray(tamano){
    let array = [];
    for(let i = 0; i < tamano; i++){
        let numero = Math.floor(Math.random() * 10);
        array.push(numero);
    }
    return array;
}
function diferencia(array1, array2) {
  let diferencias = [];
  let set = new Set(array2);
  for(let i = 0; i < array1.length; i++){
    if (!set.has(array1[i])){
      diferencias.push(array1[i]);
    }
  }
  return diferencias;
}
const array1 = generarArray(5);
const array2 = generarArray(5);
const resultado = diferencia(array1, array2);
console.log(array1, "y", array2, resultado);