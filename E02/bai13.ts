// bai13.ts: Tim max am

import readlineSync from "readline-sync";

// Khai bao mang
let array: number[] = [];

// Nhap mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu : "));

for (let i = 0; i < size; i++) {
    let value: number = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}

// Tim so am lon nhat
let maxNegative: number | null = null;

for (let i of array) {
    if (i < 0 && (maxNegative === null || i > maxNegative)) {
        maxNegative = i;
    }
}

if (maxNegative === null) {
    console.log("Mang khong co so am.");
} else {
    console.log("So am lon nhat trong mang la:", maxNegative);
}
