// bai6.ts: Nhap mang

import readlineSync from 'readline-sync';

// Khai bao mang rong
let array: number[] = [];

// Nhap phan tu cho mang
let size: number = parseFloat(readlineSync.question("Nhap so luong phan tu: "));

// Vong lap de nhap so luong phan tu
for (let i = 0; i < size; i++) {
    let value = parseFloat(readlineSync.question(`Index[${i}]: `));
    array.push(value);
}

// Kiem tra so luong phan tu trong mang
if (array.length % 2 != 0) {
    let middleIndex: number = Math.floor(array.length / 2);
    console.log("Phan tu giua: ", array[middleIndex]);
} else {
    let middle1: number = array[array.length / 2];
    let middle2: number = array[(array.length / 2) - 1];

    let average: number = (middle1 + middle2) / 2
    console.log("Trung binh cong cua 2 phan tu giua: ", average);
}
