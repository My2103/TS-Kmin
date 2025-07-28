// bai4.ts: Tinh tien

import readlineSync from "readline-sync";
// Nhap vao so luong va don gia
let soLuong: number = parseInt(readlineSync.question("So luong: "));
let donGia: number = parseFloat(readlineSync.question("Don gia: "));

// Tinh so tien va so thue
let tien: number = soLuong * donGia;
let thue: number = 0.1 * tien;

// In ra so tien va so thue
console.log(tien);
console.log(thue);
