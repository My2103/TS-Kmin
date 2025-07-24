// bai2.ts: Phuong trinh bac nhat

import readlineSync from "readline-sync";

// input
let a: number = parseFloat(readlineSync.question("a = "));
let b: number = parseFloat(readlineSync.question("b = "));

// Kiem tra nghiem
if (a === 0 && b === 0) {
    console.log("VSN");
} else if (a === 0 || b === 0) {
    console.log("VN");
} else {
    let x: number = -b/a;
    console.log(x);
}