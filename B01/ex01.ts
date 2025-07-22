// import readlinSync from 'readline-sync'
import readlineSync from 'readline-sync';
// import {question} from 'readline-sync' 

// Input
let ten: string = readlineSync.question('Nhập tên: '); 

// Process
let loiChao: string = "Hi, " + ten + "!"// Quy tắc đặt tên (codiing convetion): camelCase
// “Hi, <tên>!”.

// Output
console.log(loiChao);