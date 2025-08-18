type Product = {
    name: string,
    price: number,
};

/**
 * Hàm kiểm tra thông tin của một sản phẩm có hợp lệ không.
 * @param product Sản phẩm cần kiểm tra
 * @returns true nếu sản phẩm hợp lệ, false nếu không hợp lệ
 */
function isValid(product: Product): boolean {
    const {name, price} = product;
    if(name != "" && price > 0) {
        return true;
    }
    return false;
}

const myProduct: Product = {
    name: "",
    price: 15000,
}

const result = isValid(myProduct);
console.log(result);