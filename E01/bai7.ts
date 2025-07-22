import readlineSync from 'readline-sync';

// Input
let x: number = parseFloat(readlineSync.question("x = "));
let y: number = parseFloat(readlineSync.question("y = "));

// Compute
let result: number = Math.sqrt(x**y);

// Print result
console.log(result);

