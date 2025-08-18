// main.ts
import { Product, createProduct } from './product';
import { createCart } from './cart';
import { question } from 'readline-sync';

function main() {
    const cart = createCart();
    cart.input();
    console.log('Giỏ hàng của bạn:', cart);

    const discount = Number(question('Nhập phần trăm giảm giá (0 - 100): '));
    const total = cart.priceTotal(discount);
    console.log(`Tổng giá sau khi giảm ${discount}% là: ${total}`);
}

main();