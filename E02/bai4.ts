// bai4.ts: Cach doc so nguyen

import readlineSync from "readline-sync";

// Nhap so nguyen
let number: number = parseFloat(readlineSync.question("Nhap mot so co 1 chu so: "));

// In ra cach doc
switch (number) {
    case 0:
        console.log("Khong");
        break;
    case 1:
        console.log("Mot");
        break;
    case 2:
        console.log("Hai");
        break;
    case 3:
        console.log("Ba");
        break;
    case 4:
        console.log("Bon");
        break;
    case 5:
        console.log("Nam");
        break;
    case 6:
        console.log("Sau");
        break;
    case 7:
        console.log("Bay");
        break;
    case 8:
        console.log("Tam");
        break;
    case 9:
        console.log("Chin");
        break;
}