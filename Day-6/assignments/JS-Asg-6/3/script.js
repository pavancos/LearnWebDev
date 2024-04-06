class Product {
    constructor(prodNum, prodName, model, price) {
        this.prodNum = prodNum;
        this.prodName = prodName;
        this.model = model;
        this.price = price;
    }
    getFinPrice(disc) {
        return this.price - (this.price * (disc / 100));
    }
}
const product1 = new Product("H80P", "mobile", "M78JK10", 10000);
const product2 = new Product("A12Q", "pc", "X8R345", 15000);
const product3 = new Product("C56Z", "books", "Y2T789", 20000);
const product4 = new Product("E34R", "bike", "Z5U234", 12000);
const product5 = new Product("G78S", "car", "P9O876", 18000);

console.log(product1.prodName, "Discounted Price:", product1.getFinPrice(25));
console.log(product2.prodName, "Discounted Price:", product2.getFinPrice(15));
console.log(product3.prodName, "Discounted Price:", product3.getFinPrice(20));
console.log(product4.prodName, "Discounted Price:", product4.getFinPrice(30));
console.log(product5.prodName, "Discounted Price:", product5.getFinPrice(10));