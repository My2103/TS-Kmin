// bai15.ts: kiem tra mang co toan am hay khong

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
    console.log("Mang co so duong")
} else {
    console.log("Mang toan am")
}