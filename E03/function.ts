// Các hàm xử lý mảng

import readlineSync from "readline-sync";

// Nhap mang
function nhapMang(): number[] {
    const size: number = parseInt(readlineSync.question("Nhap so phan tu cua mang: "));
    const array: number[] = [];
    for (let i = 0; i < size; i++) {
        array[i] = parseInt(readlineSync.question(`array[${i}]: `));
    }
    return array;
}

// In ra cac so duong trong mang
function inDuong(array: number[]): number[] {
    let mangDuong: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            mangDuong.push(array[i]);
        }
    }

    return mangDuong;
}

// Dem so le trong mang
function countOdd(array: number[]): number {
    let count: number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            count++;
        }
    }

    return count;
}

// Tinh tong cac so am trong mang
function sumNegative(array: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            sum += array[i];
        }
    }

    return sum;
}

// Tim so am dau tien trong mang
function findNegative(array: number[]): number | null {
    let firstNegative: number | null = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            firstNegative = array[i];
            break;
        }
    }
    return firstNegative;
}

// Tim vi tri cua so duoc nhap vao
function findIndex(array: number[]): void {
    let num: number = parseInt(readlineSync.question("Nhap so can tim: "));
    let found: boolean = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            console.log("So can tim o vi tri", i);
            found = true;
            break;
        }
    }

    if (found == false) {
        console.log("Khong co so", num, "trong mang")
    }
}

// Tim so lon nhat
function findMax(array: number[]): number {
    let max: number = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

// Tim so am lon nhat
function findMaxNegative(array: number[]): void {
    let maxNegative: number | null = null;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 && (maxNegative == null || array[i] > maxNegative)) {
            maxNegative = array[i];
        }
    }

    if (maxNegative === null) {
        console.log("Mang khong co so am");
    } else {
        console.log("So am lon nhat trong mang:", maxNegative);
    }
}

// Phat hien so duong
function findPositive(array: number[]): void {
    let findPositive: boolean = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            findPositive = true;
        }
    }

    if (!findPositive) {
        console.log("Mang khong co so duong.");
    } else {
        console.log("Mang co so duong");
    }
}

// Phat hien so duong
function checkAllNegative(array: number[]): void {
    let findPositive: boolean = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            findPositive = true;
        }
    }

    if (!findPositive) {
        console.log("Mang toan am");
    } else {
        console.log("Mang co so duong");
    }
}

// Sap xep mang theo thu tu
function sortArray(array: number[]): void {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    console.log("Mang da sap xep: ", array);
}

// Chay chuong trinh
const myArray = nhapMang();
console.log(myArray);

let isRunning = true;

while (isRunning) {
    console.log("\n=== MENU ===");
    console.log("1. Liet ke so duong");
    console.log("2. Dem so le");
    console.log("3. Tinh tong cac so am");
    console.log("4. Tim so am dau tien");
    console.log("5. Tim vi tri cua 1 so");
    console.log("6. Tim so lon nhat");
    console.log("7. Tim so am lon nhat");
    console.log("8. Phat hien so duong");
    console.log("9. Xac dinh mang toan am");
    console.log("10. Sap xep mang theo thu tu");
    console.log("11. Thoat");

    let option: number = parseInt(readlineSync.question("Nhap lua chon cua ban: "));

    switch (option) {
        case 1: 
            console.log(inDuong(myArray));
            break;
        case 2:
            console.log("Mang co", countOdd(myArray), "so le"); 
            break;
        case 3: 
            console.log("Tong cac so am trong mang la:", sumNegative(myArray));
            break;
        case 4: 
            console.log("So am dau tien trong mang la:", findNegative(myArray));
            break;
        case 5:
            findIndex(myArray);
            break;
        case 6:
            console.log("So lon nhat trong mang:", findMax(myArray));
            break;
        case 7:
            findMaxNegative(myArray);
            break;
        case 8:
            findPositive(myArray);
            break;
        case 9:
            checkAllNegative(myArray);
            break;
        case 10:
            sortArray(myArray);
            break;
        case 11:
            console.log("Da thoat chuong trinh.");
            isRunning = false;
            break;
        default:
            console.log("Lua chon khong hop le, vui long thu lai.");
    }
}









