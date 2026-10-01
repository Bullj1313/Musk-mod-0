const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);
let i = 1;
while (i <= 10) {
    console.log(num + " x " + i + " = " + (num * i));
    i++;

}