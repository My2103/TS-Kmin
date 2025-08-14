type Point = { 
    x: number; 
    y: number; 
};

const getDistance = function (point1: Point, point2: Point): number { 
    return Math.sqrt(((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2)); 
}

const sum = function (point1: Point, point2: Point, point3: Point): number {
    const canh1 = getDistance(point1, point2);
    const canh2 = getDistance(point2, point3);
    const canh3 = getDistance(point3, point1);
    return canh1 + canh2 + canh3;
};
export { sum };

function main() {
    const a: Point = { x: 1, y: 1 };
    const b: Point = { x: 3, y: 5 };
    const c: Point = { x: -2, y: 3 };

    const tong = sum(a, b, c);
    console.log(tong);
}

main();
