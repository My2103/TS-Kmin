// MinShop project: Quản lý hệ thống bán sách

import readlineSync from "readline-sync";

// Du lieu sach
type Book = {
	id: number,
	name: string,
	price: number,
	provider: string
};
const books: Book[] = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasa",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasa",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasa",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];

// Hàm thống kê số lượng sách theo Nhà Xuất Bản
function countBooksOfPublisher(): number {
    let findProvider: string = (readlineSync.question("Nhập tên Nhà Xuất Bản bạn muốn tìm: "));

    let count: number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].provider === findProvider) {
            count++;
        }
    }

    return count;
}

// Hàm tính giá trị trung bình cộng giá bán của các quyển sách
function getAveragePrice(): number {
    let average: number = 0;
    let sum: number = 0;

    for (let i = 0; i < books.length; i++) {
        sum += books[i].price
    }

    return books.length > 0 ? sum / books.length : 0;
}

// Hàm trả về id của sách có giá cao nhất 
function findMaxPrice(): number {
    let maxPrice: number = books[0].price;
    let bookID: number = books[0]. id;

    for (let i = 0; i < books.length; i++) {
        if (books[i].price > maxPrice) {
            maxPrice = books[i].price;
            bookID = books[i].id;
        }
    }

    return bookID;
}

// Hàm cho biết dữ liệu của mảng sách có hợp lệ không
function isValid(books: Book[]): boolean {
    let checkValid: boolean = true;
    for (let i = 0; i < books.length; i++) {
        if (books[i].name === "" || books[i].price <= 0) {
            checkValid = false;
        }
    }

    return checkValid;
}

// Hàm lấy danh sách các quyển sách có giá trong đoạn [min, max]
function filterByPrice(books: Book[]): string[] {
    let minPrice: number = parseFloat(readlineSync.question("Nhập giá thấp nhất: "));
    let maxPrice: number = parseFloat(readlineSync.question("Nhập giá cao nhất: "));

    let suitableBooks: string[] = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].price >= minPrice && books[i].price <= maxPrice) {
            suitableBooks.push(books[i].name);
        }
    }

    return suitableBooks;
}

// Lấy danh sách các quyển sách có tên giống với một từ khoá cho truớc
function searchByName(books: Book[]): string[] {
    let suitableBooks: string[] = [];
    let keyWord: string = (readlineSync.question("Nhập tên sách bạn muốn tìm kiếm: "));

    for (let i = 0; i < books.length; i++) {
        if (books[i].name.toLowerCase().includes(keyWord.toLowerCase())) {
            suitableBooks.push(books[i].name);
        }
    }

    return suitableBooks;
} 

// Hàm thêm sách mới
function addNewBook(books: Book[], newBook: Book): boolean {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === newBook.id) {
            console.log("ID đã tồn tại. Không thể thêm sách mới.");
            return false;
        }
    }

    books.push(newBook);
    console.log("Đã thêm sách mới: ", newBook.name);
    console.log(books);
    return true;
}

// Hàm cập nhật giá sách
function updateBookPrice(books: Book[]): boolean {
    let bookID: number = parseInt(readlineSync.question("Nhập id của quyển sách bạn muốn thay đổi giá: "));

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === bookID) {
            let newPrice: number = parseFloat(readlineSync.question(`Nhập giá mới cho "${books[i].name}": `));
            books[i].price = newPrice;
            console.log(books);
            return true;
        } 
    }

    return false;
}  

// Hàm xoá sách có id tương ứng ra khỏi mảng sách
function removeBookById(books: Book[]): boolean {
    let bookID: number = parseInt(readlineSync.question("Nhập id của quyển sách bạn muốn xoá: "));

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === bookID) {
            books.splice(i, 1);
            console.log(books);
            return true;
        }
    } 

    return false;
}

// Hàm trả về một thống kê theo từng nhà xuất bản
function getStatisticsByProvider(books: Book[]): { provider: string, totalBooks: number, averagePrice: number }  {
    let findProvider: string = (readlineSync.question("Nhập tên Nhà Xuất Bản bạn muốn tìm: "));

    let count: number = 0;
    let sum: number = 0;

    for (let i = 0; i < books.length; i++) {
        if (books[i].provider === findProvider) {
            count++;
            sum += books[i].price;
        }
    }

    let average: number = count > 0 ? sum / count : 0;

    return {
        provider: findProvider,
        totalBooks: count,
        averagePrice: average,
    };
}

// Chay chuong trinh
let isRunning = true;

while (isRunning) {
    console.log("\n=== MENU ===");
    console.log("1. Tìm số lượng sách theo Nhà Xuất Bản");
    console.log("2. Tính trung bình cộng giá bán các quyển sách");
    console.log("3. Tìm ID của sách có giá bán cao nhất");
    console.log("4. Kiểm tra xem trong mảng sách có sách không hợp lệ không")
    console.log("5. Tìm sách theo mức giá trong [min, max]");
    console.log("6. Tìm sách theo keyword");
    console.log("7. Thêm sách mới");
    console.log("8. Cập nhật giá sách");
    console.log("9. Xoá sách");
    console.log("10. Thống kê sách theo nhà xuất bản");
    console.log("11. Thoát");

    let option: number = parseInt(readlineSync.question("Nhap lua chon cua ban: "));

    switch (option) {
        case 1:
            console.log("Nhà Xuất Bản này có", countBooksOfPublisher(), "cuốn sách");
            break;
        case 2:
            console.log("Trung bình cộng giá bán của các quyển sách là", getAveragePrice());
            break;
        case 3:
            console.log("ID của sách có giá cao nhất là", findMaxPrice());
            break;
        case 4:
            console.log("Kiểm tra dữ liệu của mảng sách:", isValid(books));
            break;
        case 5:
            console.log("Những cuốn sách trong tầm giá:", filterByPrice(books));
            break;
        case 6:
            console.log("Kết quả:", searchByName(books));
            break;
        case 7:
            let newBook: Book = {
                id: 9,
                name: "Xứ sở miên man",
                price: 220000,
                provider: "Sky Books",
            }

            addNewBook(books, newBook);
            break;
        case 8:
            if (updateBookPrice(books) === true) {
                console.log("Đã cập nhật giá thành công.");
            } else {
                console.log("Không tìm thấy sách với ID đã nhập.");
            }
            break;
        case 9:
            if (removeBookById(books) === true) {
                console.log("Đã xoá sách thành công.");
            } else {
                console.log("Không tìm thấy sách với ID đã nhập.");
            }
            break;
        case 10:
            console.log(getStatisticsByProvider(books));
            break;
        case 11: 
            console.log("Da thoat chuong trinh.");
            isRunning = false;
            break;
    }
}

