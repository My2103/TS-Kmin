// cart.ts

import { question } from 'readline-sync';
import { Product, createProduct } from './product';

// Định nghĩa kiểu Cart
type Cart = {
  productList: Product[];
  customer: string;
  input: () => void;
  priceTotal: (discount: number) => number;
};

// Factory function tạo ra đối tượng Cart
function createCart(): Cart {
  const cart: Cart = {
    // Khai báo thuộc tính               
    productList: [],
    customer: '',

    // Định nghĩa phương thức
    /**
     * Phương thức nhập thông tin giỏ hàng
     */
    input() {
      // Nhập tên khách hàng
      cart.customer = question("Nhập tên khách hàng: ");

      // Vòng lặp để nhập mảng sản phẩm
      while (true) {
        // Nhập tên sản phẩm và giá sản phẩm
        const productName = question("Nhập tên sản phẩm: ");
        const productPrice = Number(question("Nhập giá sản phẩm: "));

        // Tạo đối tượng sản phẩm mới bằng hàm createProduct
        const product = createProduct(productName, productPrice);
        
        // Thêm đối tượng sản phẩm (đã có dữ liệu) vào mảng productList
        cart.productList.push(product);
        console.log('Sản phẩm đã thêm thành công.');
        
        // Xử lý tiếp tục / dừng lại
        const next = question('Nhấn N để dừng, nhấn phím bất kỳ để tiếp tục: ');
        if (next.toLowerCase() === 'n')
          break;
      }
    },

    /**
     * Tính tổng giá của các sản phẩm trong giỏ hàng sau khi đã trừ đi khuyến mãi
     * @param discount là một số nguyên trong đoạn [0, 100] cho biết tỉ lệ phần trăm được giảm giá.
     * @returns Tổng giá
     */
    priceTotal(discount: number = 0) {
      // Nếu mảng rỗng thì tổng giá là 0
      if (cart.productList.length === 0)
        return 0;

      // Nếu mảng không rỗng thì xử lý tiếp
      // Tính tổng giá
      let total = 0;
      for (const product of cart.productList) {
        total += product.price;
      }

      // Xử lý giảm giá
      const finalPrice = total * (1 - discount / 100);
      return finalPrice;
    },
  };

  return cart;
}


// Xuất kiểu Cart và factory function createCart
export { Cart, createCart };