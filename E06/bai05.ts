// bai05.ts: Argument keyword - Tính tổng

function sum(...args: number[]): number {
    let s = 0
    for (let i = 0; i < args.length; i++) {
        s += args[i];
    }
    return s;
}

function main(): void {
    console.log(sum(1, 2));
    console.log(sum(1, 2, 3));
}

main();