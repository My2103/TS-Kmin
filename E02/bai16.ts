// bai16.ts: Sap xep mang

// Khai tao mang
let array: number[] = [64, 34, 25, 12, 22, 11, 90, 5];

// Sap xep mang bang Bubble sort
let size: number = array.length;

for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

// In ra mang da sap xep
console.log("Mang da sap xep: ", array);