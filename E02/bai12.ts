// bai12.ts: Tim max
 
import readlineSync from "readline-sync";

// Khai bao mang
let array: number[] = [];

// Nhap mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu : "));

for (let i = 0; i < size; i++) {
    let value: number = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}

// Tim so lon nhat
let max: number = array[0];

for (let i of array) {
    if (i > max) {
        max = i;
    }
}

console.log("So lon nhat trong mang: ", max);