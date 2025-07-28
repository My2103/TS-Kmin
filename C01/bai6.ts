// bai6.ts: Doi gio

import readlineSync from "readline-sync";

// Nhap vao so giay
let giay: number = parseInt(readlineSync.question("Nhap vao so giay: "));

// Tinh so gio, so phut va so giay du
let gio: number = Math.floor(giay/3600);
let phut: number = Math.floor((giay % 3600) / 60);
let giayDu: number = Math.floor(giay%60);

console.log(gio, ":", phut, ":", giayDu);