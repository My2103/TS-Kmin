// bai8.ts: Dem le (ky thuat dem)

import readlineSync from "readline-sync";

// Khai bao mang
let array: number[] = [];

// Nhap mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu : "));

for (let i = 0; i < size; i++) {
    let value: number = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}


// Dem so le
let count: number = 0;
for (let i of array) {
    if (i % 2 != 0) {
        count++;
    }
}

console.log("So luong phan tu le: ", count);
