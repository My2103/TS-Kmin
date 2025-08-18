/**
 * Hàm cho phép tạo mảng mới bằng cách mở rộng mảng có trước.
 * @param arr Mảng cần được mở rộng
 * @param elements Rest parameter chứa các phần tử sẽ được dùng để mở rộng mảng arr
 * @returns Mảng mới là tổng hợp từ mảng arr và các giá trị trong tham số elements.
 */
function extendArray(arr: number[], ...elements: number[]): number[] {
    const restArray: number[] = [...arr, ...elements];
    return restArray;
}

const a: number[] = [5, 8, 1];
const b: number[] = extendArray(a, 7, 3); // [5, 8, 1, 7, 3]
console.log(b);