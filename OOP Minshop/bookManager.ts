// bookManager.ts

import { Book } from "./book";

export class BookManager {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getAllBooks(): Book[] {
        return this.books;
    }

    // Hàm thống kê số lượng sách theo Nhà Xuất Bản
    public countBooksOfPublisher(publisher: string): number {
        let count: number = 0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].publisher === publisher) {
                count++;
            }
        }
        return count;
    }

    // Hàm tính giá trị trung bình cộng giá bán của các quyển sách
    public getAveragePrice(): number {
        let sum: number = 0;
        for (let i = 0; i < this.books.length; i++) {
            sum += this.books[i].price;
        }
        return this.books.length > 0 ? sum / this.books.length : 0;
    }
    
    // Hàm trả về id của sách có giá cao nhất 
    public findMaxPrice(): number {
        if (this.books.length === 0) return -1; 

        let maxPrice: number = this.books[0].price;
        let bookID: number = this.books[0].id;

        for (let i = 1; i < this.books.length; i++) {
            if (this.books[i].price > maxPrice) {
                maxPrice = this.books[i].price;
                bookID = this.books[i].id;
            }
        } 

        return bookID;
    }

    // Hàm cho biết dữ liệu của mảng sách có hợp lệ không
    public isValid(): boolean {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === "" || this.books[i].price <= 0) {
                return false;
            }
        }
        return true;
    }

    // Hàm lấy danh sách các quyển sách có giá trong đoạn [min, max]
    public filterByPrice(minPrice: number, maxPrice: number): string[] {
        const suitableBooks: string[] = [];
    
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            if (book.price >= minPrice && book.price <= maxPrice) {
                suitableBooks.push(book.name);
            }
        }
    
        return suitableBooks;
    }
    
    // Lấy danh sách các quyển sách có tên giống với một từ khoá cho truớc
    public searchByName(keyword: string): string[] {
        const suitableBooks: string[] = [];
    
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            if (book.name === keyword) {
                suitableBooks.push(book.name);
            }
        }
    
        return suitableBooks;
    }
    
    // Hàm thêm sách mới
    public addNewBook(newBook: Book): boolean {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === newBook.id) {
                console.log("ID đã tồn tại. Không thể thêm sách mới.");
                return false;
            }
        }
    
        this.books.push(newBook);
        console.log("Đã thêm sách mới:", newBook.name);
        return true;
    }
    
    // Hàm cập nhật giá sách
    public updateBookPrice(bookID: number, newPrice: number): boolean {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === bookID) {
                this.books[i].price = newPrice;
                console.log(`Đã cập nhật giá cho sách "${this.books[i].name}"`);
                return true;
            }
        }
    
        console.log("Không tìm thấy sách với ID đã nhập.");
        return false;
    }
    
    // Hàm xoá sách có id tương ứng ra khỏi mảng sách
    public removeBookById(bookID: number): boolean {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === bookID) {
                const removedBook = this.books.splice(i, 1)[0];
                console.log(`Đã xoá sách: "${removedBook.name}"`);
                return true;
            }
        }
    
        console.log("Không tìm thấy sách để xoá.");
        return false;
    }
    
    // Hàm trả về một thống kê theo từng nhà xuất bản
    public getStatisticsByProvider(publisherName: string): {
        publisher: string,
        totalBooks: number,
        averagePrice: number
    } {
        let count = 0;
        let sum = 0;
    
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].publisher === publisherName) {
                count++;
                sum += this.books[i].price;
            }
        }
    
        const average = count > 0 ? sum / count : 0;
    
        return {
            publisher: publisherName,
            totalBooks: count,
            averagePrice: average
        };
    }
    
}

