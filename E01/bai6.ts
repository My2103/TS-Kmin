import readlineSync from "readline-sync";

// Input
let number: number = parseFloat(readlineSync.question("Nhap mot so co 3 chu so: "));

// Chia lay don vi, chuc, tram
let donVi: number = number%10;
let chuc: number = Math.floor((number/10)%10);
let tram: number = Math.floor(number/100);

// Print result
console.log("Don vi: ", donVi);
console.log("Chuc: ", chuc);
console.log("Tram: ", tram);