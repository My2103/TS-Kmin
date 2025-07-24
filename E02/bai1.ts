// bai1.ts: Kiem tra tam giac deu

import readlineSync from "readline-sync";

// Input edge of triangle
let a: number = parseFloat(readlineSync.question("a = "));
let b: number = parseFloat(readlineSync.question("b = "));
let c: number = parseFloat(readlineSync.question("c = "));

// Check the triangle
if (a === b && b === c) {
    console.log("Yes");
} else {
    console.log("No");
}