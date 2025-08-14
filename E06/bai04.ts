// bai04.ts: Tính tổng
function sum(a: number, b: number = 0, c: number = 0): number {
    return a + b + c;
}

function main(): void {
    console.log(sum(1, 2));
    console.log(sum(1));
}

main();