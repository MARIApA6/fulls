export default class product {
    id;
    name;
    price;
    quantity;

    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}


const products = [
    new product(1, 'Product 1', 100, 0),
    new product(2, 'Product 2', 200, 0),
    new product(3, 'Product 3', 300, 0),
    new product(4, 'Product 4', 400, 0),
    new product(5, 'Product 5', 500, 0),
];