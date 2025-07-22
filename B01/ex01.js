var readlineSync = require('readline-sync');

// Input
let ten = readlineSync.question('Nhap ten: ');;

// Process
let loiChao = "Hi, " + ten + "!"; // Quy tac dat ten (coding convetion): camelCase

// Output
console.log(loiChao);