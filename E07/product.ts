// product.ts

import { question } from "readline-sync"

// Định nghĩa kiểu Product
type Product = {
    name: string;
    price: number;
    input(): void;
};
  

function createProduct(name: string, price: number): Product {

  // Đối tượng Product
    const product: Product = {
        // Khai báo thuộc tính
        name: name,
        price: price,
    
        // Định nghĩa phương thức
        /**
         * Phương thức nhập thông tin của một product
         */
        input(): void {
        this.name = question("Nhập tên sản phẩm: ");
        this.price = parseFloat(question("Nhập giá sản phẩm: "));
        console.log(`Sản phẩm đã nhập: ${this.name} - Giá: ${this.price}`);
        }
  };

  return product;
}

// Xuất kiểu Product và đối tượng product
export { Product, createProduct };