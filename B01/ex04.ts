import {question} from 'readline-sync';

// let a: string = question('Nhập số thứ nhất: ');
// let aa: number = Number(a);

let a: number = Number(question('Nhập số thứ nhất: ')); // Nhập số
let b: number = Number(question('Nhập số thứ hai: ')); 
let c: number = a + b;
console.log('a + b =', c);