// Tính diện tích hình tròn

import { question } from "readline-sync";
import { Point2D } from "./point2d";

export class Circle {
  // Khai báo thuộc tính của đối tượng
  private _center: Point2D;
  private _radius: number;

  constructor(center: Point2D, radius: number) {
    this._center = center;
    this._radius = radius;
  }

  public get center(): Point2D {
    return this._center;
  }

  public set center(value: Point2D) {
    this._center = value;
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    if (value > 0) {
        this._radius = value;
    } else {
        this._radius = 1;
    }
  }

  public getArea(): number {
    return Math.PI * this._radius ** 2;
  }
}

// Tạo đối tượng
const center = new Point2D(0, 0);
const circle = new Circle(center, 5);

// In ra thông tin ban đầu
console.log("Tâm hình tròn mặc định:", `(${circle.center.x}, ${circle.center.y})`);
console.log("Bán kính mặc định:", circle.radius);
console.log("Diện tích:", circle.getArea());

// Dùng setter gán bán kính mới
circle.radius = 10;

// In lại thông tin sau khi thay đổi
console.log("Bán kính mới sau khi gán:", circle.radius);
console.log("Diện tích mới:", circle.getArea());
