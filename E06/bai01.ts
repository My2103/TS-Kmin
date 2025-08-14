type Point = {
    x: number;
    y: number;
}
export { Point };

const getDistance = (point1: Point, point2: Point): number => {
    return Math.sqrt(((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2));
}
export { getDistance };

function main() {
    const a: Point = {
        x: 1,
        y: 1,
    };

    const b: Point = {
        x: 3,
        y: 5,
    };

    const distance = getDistance(a, b);
    console.log(distance)
}

main();