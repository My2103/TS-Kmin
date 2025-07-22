import readlineSync from "readline-sync";

// Input
let numberA: number = parseFloat(readlineSync.question("a = "));
let numberB: number = parseFloat(readlineSync.question("b = "));

// Compute a+b and a/b
let sum: number = numberA + numberB;
let divide: number = numberA/numberB;

// Print result
console.log("a + b = ", sum);
console.log("a / b = ", divide);
