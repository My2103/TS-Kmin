// bai3.ts: Xep loai sinh vien

import readlineSync from "readline-sync";

// Input
let grade: number = parseFloat(readlineSync.question("Nhap diem: "));

// Xep loai sinh vien
if (grade < 5) {
    console.log("Yeu");
} else if (5 <= grade && grade < 6.5) {
    console.log("Trung binh");
} else if (6.5 <= grade && grade < 8) {
    console.log("Kha");
} else if (grade >= 8) {
    console.log("Gioi");
}