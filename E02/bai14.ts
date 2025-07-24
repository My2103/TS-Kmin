// bai14.ts: Ton tai duong

import readlineSync from "readline-sync";

// Khai bao mang
let array: number[] = [];

// Nhap mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu : "));

for (let i = 0; i < size; i++) {
    let value: number = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}

// Tim so duong trong mang
let findPositive: boolean = false;

for (let i of array) {
    if (i > 0) {
        findPositive = true;
        break;
    }
}

if (findPositive === true) {
    console.log("Yes")
} else {
    console.log("No")
}