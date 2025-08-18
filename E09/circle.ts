// circle.ts

import { question } from "readline-sync";
import { Point2D } from "./point2d";

class Circle {
  // Khai báo thuộc tính của đối tượng
  private _center: Point2D;
  private _radius: number;
  /**
   * Phương thức khởi tạo đối tượng Circle
   * @param center Tâm của hình tròn
   * @param radius Bán kính
   */
  constructor(center: Point2D, radius: number) {
    this._center = center;
    if (radius > 0)
        this._radius = radius;
    else 
        this._radius = 1; 
  }

  /**
   * Phương thức nhập thông tin của hình tròn từ bàn phím
   */
  public scan(): void {
    console.log("Nhap tam hinh tron:");
    this._center.scan();
    const rInput = question("Nhap ban kinh: ");
    const r = Number(rInput);
    this._radius = r > 0 ? r : 1;
  }

  /**
   * Phương thức in thông tin của hình tròn
   */
  public print(): void {
    console.log("Tam:");
    this._center.print();
    console.log(`Ban kinh: ${this._radius}`);
  }

  /**
   * Phương thức lấy tâm của hình tròn
   * @returns Tâm của hình tròn
   */
  public getCenter(): Point2D {
    return this._center;
  }

  /**
   * Phương thức cập nhật tâm của hình tròn bằng một điểm khác
   * @param center Tâm hình tròn
   */
  public setCenter(center: Point2D) {
    const x = center.getX();
    const y = center.getY()
    this._center = new Point2D(center.getX(), center.getY());
  }

  /**
   * Phương thức lấy bán kính hình tròn
   * @returns Bán kính của hình tròn
   */
  public getRadius(): number {
    return this._radius;
  }

  /**
   * Phương thức cập nhật bán kình hình tròn
   * @param radius Bán kính mới của hình tròn
   */
  public setRadius(radius: number) {
    if (radius > 0) {
        this._radius = radius;
    }
  }

  /**
   * Phương thức di chuyển hình tròn đến vị trí mới
   * @param dx Độ dời theo chiều ngang
   * @param dy Độ dời theo chiều dọc
   */
  public move(dx: number, dy: number): void {
    this._center.move(dx, dy);
  }

  /**
   * Phương thức tính diện tích hình tròn
   * @returns Diện tích hình tròn
   */
  public getArea(): number {
    return Math.PI * this._radius * this._radius;
  }
}

export { Circle };