// bai8.ts: Hoan vi

import readlineSync from "readline-sync";

// Nhap vao 2 so
let a: number = parseFloat(readlineSync.question("Nhap so a: "));
let b: number = parseFloat(readlineSync.question("Nhap so b: "));

// Hoan vi 2 so
[a, b] = [b, a];

console.log("Sau khi hoan doi: a =", a, "b = ", b);
