class Product {
    constructor(n,p) {
        this.price = p;
        this.name = n;
    }
    valueOf() {
        // return this.p;
        return this.price;
        // return null;
    }
}

p = new Product("Iphone", 16500);

console.log(10-p); 