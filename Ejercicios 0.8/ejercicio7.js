function generarArray(tamano) {
  let array = [];
  for (let i = 0; i < tamano; i++) {
    let numero = Math.floor(Math.random() * 10);
    array.push(numero);
  }
  return array;
}
function quicksort(array){
    if(array.length <= 1){
        return array;
    }
    let indicePivote = Math.floor(Math.random() * array.length);
    let pivote = array[indicePivote];
    let menores = array.filter(function(elemento){
        return elemento < pivote;
    });
    let iguales = array.filter(function(elemento){
        return elemento === pivote;
    });
    let mayores = array.filter(function(elemento){
        return elemento > pivote;
    });
    let menoresOrdenados = quicksort(menores);
    let mayoresOrdenados = quicksort(mayores);
    return menoresOrdenados.concat(iguales).concat(mayoresOrdenados);
}
function principal(){
    let array = generarArray(100000);
    let inicio = Date.now();
    let arrayOrdenado = quicksort(array);
    let fin = Date.now();
    let tiempoTranscurrido = fin - inicio;
    console.log("El algoritmo quicksort ha tardado " + tiempoTranscurrido + " ms en ordenar 100.000 elementos.")
 }
principal();