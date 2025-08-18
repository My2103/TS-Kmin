// Điểm (x, y) : (0, 0) (1, 2)
// Class Bản thiết kế

import { question } from "readline-sync";

export class Point2D {
    private x: number;
    private y: number;

    // Chuẩn bị dữ liệu
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }


    public getY(): number {
        return this.y;
    }


    public setX(x: number): void {
        this.x = x;
    }


    public setY(y: number): void {
        this.y = y;
    }

    public scan(): void {
        this.x = Number(question('Nhap x: '));
        this.y = Number(question('Nhap y: '));
    }

    public getDistance(other: Point2D): number {
        // Khoảng cách giữa điểm this và điểm other
        const d: number = Math.sqrt((this.x - other.x)**2 + (this.y - other.y)**2);
        return d;
    }
}

