const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
let factorial = 1, i = 1;
while (i <= num) {
    factorial *= i;
    i++;

}
console.log(factorial);