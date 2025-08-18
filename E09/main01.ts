// main01.ts

import { Point2D } from "./point2d";

// Lưu ý: Hàm nào không cần test thì comment lại.
// Sử dụng Point2D
function mainPoint() {
    // Khởi tạo đối tượng mới
    const p1: Point2D = new Point2D();

    // Test thử hàm scan
    p1.scan();
    
    // Test thử hàm print
    p1.print();

    // Test thử hàm get set, get
    console.log("Truoc khi set: ");
    p1.print();
    p1.setX(1);
    p1.setY(-1);
    console.log("Sau khi set: ");
    console.log("x =", p1.getX());
    console.log("y =", p1.getY());
    
    // Test thử hàm move
    p1.move(2, 3);
    p1.print();

    // Test thử hàm getDistance
    const p2: Point2D = new Point2D(4, 5);
    p2.print();
    console.log(p1.getDistance(p2));
};

mainPoint();