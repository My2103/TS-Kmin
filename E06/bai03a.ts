// bai03.ts: Module - Tính tổng của 3 cạnh tam giác

type Point = {
    x: number;
    y: number;
}
export { Point };

const getDistance = (point1: Point, point2: Point): number => {
    return Math.sqrt(((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2));
}
export { getDistance };