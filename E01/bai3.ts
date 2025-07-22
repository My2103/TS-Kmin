import readlineSync from "readline-sync";

// Input
let ten: string = readlineSync.question("Nhap ten: ");

// Process
let loiChao: string = "Hi, " + ten + "!";

// Output
console.log(loiChao);