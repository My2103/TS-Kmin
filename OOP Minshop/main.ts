// main.ts
import { Book } from "./book";
import { BookManager } from "./bookManager";
import * as readlineSync from "readline-sync";

// Khoi tao doi tuong quan ly sach
const manager = new BookManager();

// Tao danh sach du lieu cung
const sampleBooks: Book[] = [
    new Book("Luật tâm thức", 220000, "Fahasa"),
    new Book("Chiến binh cầu vồng", 140000, "Fahasa"),
    new Book("Nghệ thuật tập trung", 90000, "Tuổi trẻ"),
    new Book("Bye Béo", 305000, "Kmin Books"),
    new Book("Sát thủ bán hàng", 180000, "Fahasa"),
    new Book("Hoàng tử bé", 50000, "Kmin Books"),
    new Book("Tâm lý học tội phạm", 400000, "Kmin Books"),
    new Book("Hiểu về trái tim", 130000, "Tuổi trẻ"),
];

// Thêm sách vào BookManager
sampleBooks.forEach(book => manager.addBook(book));

// Menu
console.log(sampleBooks);
let isRunning = true;

while (isRunning) {
    console.log("\n=== MENU ===");
    console.log("1. Tìm số lượng sách theo Nhà Xuất Bản");
    console.log("2. Tính trung bình cộng giá bán các quyển sách");
    console.log("3. Tìm ID của sách có giá bán cao nhất");
    console.log("4. Kiểm tra dữ liệu sách");
    console.log("5. Tìm sách theo mức giá [min, max]");
    console.log("6. Tìm sách theo tên");
    console.log("7. Thêm sách mới");
    console.log("8. Cập nhật giá sách");
    console.log("9. Xoá sách");
    console.log("10. Thống kê theo nhà xuất bản");
    console.log("11. Thoát");

    const option = parseInt(readlineSync.question("Nhập lựa chọn của bạn: "));

    switch (option) {
        case 1:
            const publisher = readlineSync.question("Nhập tên nhà xuất bản: ");
            console.log("Số lượng sách:", manager.countBooksOfPublisher(publisher));
            break;
        case 2:
            console.log("Giá trung bình:", manager.getAveragePrice());
            break;
        case 3:
            console.log("ID sách giá cao nhất:", manager.findMaxPrice());
            break;
        case 4:
            console.log("Dữ liệu hợp lệ:", manager.isValid());
            break;
        case 5:
            const min = parseInt(readlineSync.question("Nhập giá thấp nhất: "));
            const max = parseInt(readlineSync.question("Nhập giá cao nhất: "));
            console.log("Kết quả:", manager.filterByPrice(min, max));
            break;
        case 6:
            const keyword = readlineSync.question("Nhập tên sách cần tìm: ");
            console.log("Kết quả:", manager.searchByName(keyword));
            break;
        case 7:
            // const id = parseInt(readlineSync.question("Nhập ID sách mới: "));
            const name = readlineSync.question("Nhập tên sách: ");
            const price = parseInt(readlineSync.question("Nhập giá sách: "));
            const pub = readlineSync.question("Nhập nhà xuất bản: ");
            const newBook = new Book(name, price, pub);
            manager.addNewBook(newBook);
            break;
        case 8:
            const updateID = parseInt(readlineSync.question("Nhập ID sách cần cập nhật: "));
            const newPrice = parseInt(readlineSync.question("Nhập giá mới: "));
            manager.updateBookPrice(updateID, newPrice);
            break;
        case 9:
            const removeID = parseInt(readlineSync.question("Nhập ID sách cần xoá: "));
            manager.removeBookById(removeID);
            break;
        case 10:
            const pubName = readlineSync.question("Nhập tên nhà xuất bản: ");
            console.log(manager.getStatisticsByProvider(pubName));
            break;
        case 11:
            console.log("Đã thoát chương trình.");
            isRunning = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
}

