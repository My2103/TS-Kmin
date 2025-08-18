import { Circle } from "./circle";
import { Point2D } from "./point2d";

// Sử dụng Circle
function mainCircle() {
    // Khởi tạo đối tượng mới
    const center: Point2D = new Point2D(0, 0);
    const circle: Circle = new Circle(center, 3);
    
    // Test thử hàm scan
    circle.scan();
    
    // Test thử hàm print
    circle.print();

    // Test thử hàm get set
    console.log("Truoc khi set: ");
    circle.print();
    circle.setRadius(3);
    circle.setCenter(new Point2D(6, 9));
    console.log("Sau khi set: ");
    circle.getCenter().print();
    console.log("R =", circle.getRadius());
    
    // Test thử hàm move
    circle.move(2, 3);
    console.log("Hinh tron sau khi di chuyen: ");
    circle.print();

    // Test thử hàm getArea
    const s = circle.getArea();
    console.log(`Dien tich hinh tron la: ${s}`);
}

mainCircle();
