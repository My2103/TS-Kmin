// Hình tròn: tâm (Point2D) + bán kính (number)

import { question } from "readline-sync";
import { Point2D } from "./Point2D";

export class Circle {
    private center: Point2D;
    private radius: number;

    constructor(center: Point2D, radius: number) {
        if (radius > 0)
            this.radius = radius;
        else
            this.radius = 1;
        // this.center = center; // Reference: Shallow Copy
        const x: number = center.getX();
        const y: number = center.getY();
        this.center = new Point2D(x, y); // Deep copy
    }

    public scan(): void {
        this.center.scan();
        this.radius = Number(question('Nhap ban kinh: '));
    }
}