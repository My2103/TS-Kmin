// bai7.ts: Khoang cach

import readlineSync from "readline-sync"
// Nhap vao cac toa do
let a1: number = parseInt(readlineSync.question("Nhap a1: "));
let a2: number = parseInt(readlineSync.question("Nhap a2: "));
let b1: number = parseInt(readlineSync.question("Nhap b1: "));
let b2: number = parseInt(readlineSync.question("Nhap b2: "));

// Tinh khoanh cach
let result: number = Math.sqrt(((b1 - a1)*(b1 - a1)) + ((b2 - a2)*(b2 - a2)));

// In ra ket qua
console.log(result);
