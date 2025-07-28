// bai2.ts: Phep chia 3 so

import ReadlineSync from "readline-sync";

// Nhap vao 3 so
let numA: number = parseFloat(ReadlineSync.question("Nhap vao so a: "));
let numB: number = parseFloat(ReadlineSync.question("Nhap vao so b: "));
let numC: number = parseFloat(ReadlineSync.question("Nhap vao so c: "));

// Chia 3 so
let result: number = ((numA*numA)*(numB*numB))/numC;
console.log("Ket qua: ", result);