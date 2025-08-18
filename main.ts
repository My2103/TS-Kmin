import { Circle } from './Circle';
import {Point2D} from './Point2D';

function mainPoint2D() {
    let a: Point2D = new Point2D();
    let b: Point2D = new Point2D(3, 4);
    // a.scan();
    // Tính khoảng cách giữa 2 điểm a và b
    // const d: number = getDistance(a, b); // Hướng hàm
    const d: number = a.getDistance(b);//  OOP 
    console.log(d);
}

function mainCircle() {
    // Cách 1
    let b: Point2D = new Point2D(3, 4);
    const c: Circle = new Circle(b, 3); // c.center = b
    b.setX(-3);

    // Cách 2
    // const c: Circle = new Circle(new Point2D(3, 4), 3);
    console.log(c);
}

mainCircle();