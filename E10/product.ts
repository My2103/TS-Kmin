// Product

export class Product {
    private _name: string;
    private _price: number;
    private _quantity: number;
    private static _totalProducts: number = 0;

    constructor(name: string, price: number, quantity: number) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        Product._totalProducts++;
    }

    public getTotalValue(): number {
        return this._price * this._quantity;
    }

    public static getTotalProducts(): number {
        return Product._totalProducts;
    }
}

const product1 = new Product("Banh mi", 25000, 3);
const product2 = new Product("Pho", 50000, 2);
const product3 = new Product("Com tam", 45000, 5);

console.log(product1.getTotalValue()); // Trả về tổng giá trị của product1
console.log(Product.getTotalProducts()); // Trả về tổng số sản phẩm trong giỏ hàng

// Trả về tổng giá trị của sản phẩm 
const totalValue = product1.getTotalValue() + product2.getTotalValue() + product3.getTotalValue();
console.log(totalValue);
