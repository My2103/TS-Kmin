// bai9.ts: Tinh can, tri tuyet doi, luy thua

import readlinSync from "readline-sync";

// Nhap vao x, y
let x: number = parseFloat(readlinSync.question("Nhap vao x: "));
let y: number = parseFloat(readlinSync.question("Nhap vao y: "));

// Tinh toan
let S: number = (Math.sqrt(x) + Math.abs(x)) / Math.sqrt(x**y);

console.log(S);