// bai01.ts

import { question } from "readline-sync"

// Định nghĩa kiểu Product
import { Product, createProduct } from './product';

// Tạo đối tượng product từ hàm createProduct
const product: Product = createProduct('', 0);

// Test method
product.input();