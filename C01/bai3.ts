// bai3.ts: Chu vi va dien tich hinh tron

import ReadlineSync from "readline-sync";

// Nhap vao ban kinh hinh tron
let radius: number = parseFloat(ReadlineSync.question("Nhap vao ban kinh hinh tron: "));

// Khai bao so pi (const)
const PI: number = 3.14;

// Tinh chu vi cua hinh tron
let chuVi: number = 2 * PI * radius;
// Tinh dien tich cua hinh tron
let dienTich: number = PI * radius * radius;

// In ra ket qua
console.log("Chu vi hinh tron = ", chuVi);
console.log("Dien tich hinh tron = ", dienTich);
