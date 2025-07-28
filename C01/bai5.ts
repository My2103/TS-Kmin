// bai5.ts: so nut bien so xe

import readlineSync from 'readline-sync';

// Nhap vao bien so xe
let num: number = parseInt(readlineSync.question("Nhap vao bien so xe: "));

// Tinh so nut cua bien so xe
let a: number = Math.floor(num/10000);
let b: number = Math.floor((num/1000)%10);
let c: number = Math.floor((num/100)%10);
let d: number = Math.floor((num/10)%10);
let e: number = Math.floor(num%10);

let soNut: number = Math.floor((a + b + c + d + e)%10);
console.log(soNut);




