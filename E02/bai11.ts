// bai11.ts: Tim ma sinh vien (ky thuat tim vi tri)

import readlineSync from "readline-sync";

let array: number[] = [123, 124, 125, 126, 127, 128, 129];

// Tim vi tri cua ma sinh vien can tim
let findNumber: number = parseFloat(readlineSync.question("Nhap ma so can tim: "));

for (let i in array) {
    if (array[i] === findNumber) {
        console.log("So can tim o vi tri ", i);
        break;
    }
}