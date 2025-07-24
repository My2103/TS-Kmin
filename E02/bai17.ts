// bai17.ts: Palindrome

import readlineSync from "readline-sync";

// Nhap vao mot string 
let my_string: string = readlineSync.question("Nhap vao mot chuoi: ");

// Xu ly string
let reversed_string: string = my_string.split('').reverse().join('');

// So sanh string
if (my_string === reversed_string) {
    console.log("Chuoi la Palindrome");
} else {
    console.log("Chuoi khong phai la Palindrome");
}