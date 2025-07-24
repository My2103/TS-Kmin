// bai10.ts: Tim am dau tien (ky thuat tim gia tri)

import readlineSync from "readline-sync";

// Khai bao mang
let array: number[] = [];

// Nhap mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu : "));

for (let i = 0; i < size; i++) {
    let value: number = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}

// Tim so am dau tien trong mang
for (let i of array) {
    if (i < 0) {
        console.log("So am dau tien trong mang: ", i);
        break;
    }
}