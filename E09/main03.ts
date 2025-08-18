import { question } from "readline-sync";
import chalk from "chalk";
import { Point2D } from "./point2d";   // nếu file point2d.ts nằm cùng thư mục
import { Circle } from "./circle";     // nếu file circle.ts nằm cùng thư mục

class Program {
  private point: Point2D;
  private circle: Circle;

  constructor() {
    this.point = new Point2D();
    this.circle = new Circle(this.point, 1);
  }

  private menu() {
    console.log(chalk.blue("=== MENU ==="));
    console.log("1. Nhap toa do diem");
    console.log("2. In toa do diem");
    console.log("3. Nhap hinh tron");
    console.log("4. In hinh tron");
    console.log("5. Di chuyen hinh tron");
    console.log("6. Tinh dien tich hinh tron");
    console.log("0. Thoat");
  }

  public run() {
    let choice: number = -1;

    do {
      this.menu();
      choice = Number(question(chalk.yellow("Chon chuc nang (0 de thoat): ")));
      console.clear();

      switch (choice) {
        case 1:
          console.log(chalk.green("Nhap toa do diem:"));
          this.point.scan();
          break;
        case 2:
          console.log(chalk.green("Toa do diem:"));
          this.point.print();
          break;
        case 3:
          console.log(chalk.green("Nhap hinh tron:"));
          this.circle.scan();
          break;
        case 4:
          console.log(chalk.green("Thong tin hinh tron:"));
          this.circle.print();
          break;
        case 5:
          const dx = Number(question("Nhap dx: "));
          const dy = Number(question("Nhap dy: "));
          this.circle.move(dx, dy);
          console.log(chalk.green("Da di chuyen hinh tron."));
          break;
        case 6:
          const area = this.circle.getArea();
          console.log(chalk.green(`Dien tich hinh tron: ${area}`));
          break;
        case 0:
          console.log(chalk.magenta("Cam on ban da su dung chuong trinh. Tam biet!"));
          break;
        default:
          console.log(chalk.red("Lua chon khong hop le. Vui long thu lai."));
      }

      if (choice !== 0) {
        question(chalk.gray("\nNhan Enter de tiep tuc..."));
        console.clear();
      }

    } while (choice !== 0);
  }
}

// ✅ Hàm main nằm ngay đây luôn
const app = new Program();
app.run();
