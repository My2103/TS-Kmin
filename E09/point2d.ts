// point2d.ts

import { question } from "readline-sync";

class Point2D {
    // Khai báo thuộc tính của đối tượng
    private x: number;
    private y: number;

    /**
     * Phương thức khởi tạo một đối tượng thuộc lớp Point2D
     * @param x Hoành độ
     * @param y Tung độ
     */
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * Phương thức nhập tọa độ điểm
     */
    public scan(): void {
        const xInput = question("Nhap hoanh do x: ");
        const yInput = question("Nhap tung do y: ");
        this.x = Number(xInput);
        this.y = Number(yInput);
    }

    /**
     * Phương thức in tọa độ điểm
     */
    public print(): void {
        console.log(`(${this.x}, ${this.y})`);
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

    /**
     * Phương thức di chuyển điểm đến vị trí mới
     * @param dx Độ dời theo chiều ngang
     * @param dy Độ dời theo chiều dọc
     */
    public move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    /**
     * Phương thức tính khoảng cách đến một điểm khác
     * @param point Điểm cần được tính khoảng cách đến
     * @returns Khoảng cách
     */
    public getDistance(point: Point2D): number {
        const dx = this.x - point.getX();
        const dy = this.y - point.getY();
        return Math.sqrt(dx * dx + dy * dy);
    }
}

export {Point2D};

