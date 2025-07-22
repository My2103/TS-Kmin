import readlineSync from "readline-sync";

// Input
let fahrenheit: number = parseFloat(readlineSync.question("Nhap do F: "));

// Conver C to F
let celsius: number = (5/9) * (fahrenheit - 32);

// Print result
console.log("Do C: ", celsius);