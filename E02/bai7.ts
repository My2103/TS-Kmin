// bai7.ts: liet ke so duong trong mang 1 chieu so nguyen

import readlineSync from "readline-sync";

// Khai bao mang
let array: number[] = [];

// Nhap mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu : "));

for (let i = 0; i < size; i++) {
    let value: number = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}

// In ra phan tu duong
console.log("Phan tu duong trong mang: ");
for (let i of array) {
    if (i > 0) {
        console.log(i)
    }
}