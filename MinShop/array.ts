// Cho trước một mảng số nguyên. 
// Hãy liệt kê các giá trị lớn hơn giá trị trung bình của các phần tử trong mảng

let myArray: number[] = [21, 3, 11, 6, 10, 15, 2];

let avg = average(myArray);
listNumber(myArray, avg);

// Hàm tính trung bình cộng các giá trị trong mảng
function average(myArray: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    let average: number = sum / myArray.length;

    return average;
}

function listNumber(myArray: number[], average: number): void {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > average) {
            console.log(myArray[i]);
        }
    }
}
