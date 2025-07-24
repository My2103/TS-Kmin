// bai9.ts: Tong am (ky thuat tinh tong)

import readlineSync from "readline-sync";

// Khai bao mang
let array: number[] = [];

// Nhap mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu : "));

for (let i = 0; i < size; i++) {
    let value: number = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}

// Tinh tong so am
let sum: number = 0;
for (let i of array) {
    if (i < 0) {
        sum += i;
    }
}

console.log("Tong so am trong mang: ", sum);