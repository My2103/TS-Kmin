// Điểm (x, y) : (0, 0) (1, 2)
// Class Bản thiết kế

import { question } from "readline-sync";

export class Point2D {
    private _x: number;
    private _y: number;

    // Chuẩn bị dữ liệu
    constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }

    // Getter cho x
    public get x(): number {
        return this._x;
    }

    // Setter cho x
    public set x(value: number) {
        this._x = value;
    }

    // Getter cho y
    public get y(): number {
        return this._y;
    }

    // Setter cho y
    public set y(value: number) {
        this._y = value;
    }

    public scan(): void {
        this._x = Number(question('Nhap x: '));
        this._y = Number(question('Nhap y: '));
    }

    public getDistance(other: Point2D): number {
        // Khoảng cách giữa điểm this và điểm other
        const d: number = Math.sqrt((this._x - other._x)**2 + (this._y - other._y)**2);
        return d;
    }
}

/*const p1 = new Point2D(0, 0);
const p2 = new Point2D(1, 2);

console.log("p1.x mặc định:", p1.x); // dung getter
console.log(p1.getDistance(p2));

p1.x = 5; // dung setter
console.log("p1.x được gán giá trị mới:", p1.x);

console.log(p1.getDistance(p2));*/
