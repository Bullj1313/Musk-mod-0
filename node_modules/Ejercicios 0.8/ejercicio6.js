function generarArray(tamano) {
  let array = [];
  for (let i = 0; i < tamano; i++) {
    let numero = Math.floor(Math.random() * 10);
    array.push(numero);
  }
  return array;
}
 function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j + 1]){
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
    return array;
 }
 function principal(){
    let array = generarArray(100000);
    let inicio = Date.now();
    let arrayOrdenado = bubbleSort(array);
    let fin = Date.now();
    let tiempoTranscurrido = fin - inicio;
    console.log("El algoritmo bubble sort ha tardado " + tiempoTranscurrido + " en ordenar 100.000 elementos.")
 }
principal();