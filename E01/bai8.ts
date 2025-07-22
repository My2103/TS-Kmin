let numbers: number[] = [8, 3, 6, 2];

// 1. In ra man hinh phan tu dau tien
console.log("Index[0]: ", numbers[0]);

// 2. In ra man hinh phan tu cuoi cung
console.log("Index[3]: ", numbers[3]);

// 3. Tinh trung binh cong cua cac phan tu
let sum = 0;
for (let i of numbers) {
    sum += i;
}

let average: number = sum/4;

console.log(average);

// 4. Sua phan tu ke cuoi thanh tong cac phan tu trong mang
numbers[numbers.length - 2] = sum;

console.log(numbers);

// 5. Dao lai thu tu trong mang nay
let reverse_array: number[] = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reverse_array.push(numbers[i]);
}

console.log(reverse_array);

