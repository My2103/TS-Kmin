import readlineSync from 'readline-sync';

// Input
let numberA: number = parseFloat(readlineSync.question("Nhập số a: "));
let numberB: number = parseFloat(readlineSync.question("Nhập số b: "));

// Compute a*a + b*b
let result: number = numberA * numberA + numberB * numberB;

// Print the result
console.log(`Kết quả là: ${result}`);
