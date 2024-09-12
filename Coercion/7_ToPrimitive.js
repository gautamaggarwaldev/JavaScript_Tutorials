class Product {
    constructor(n,p) {
        this.name = n;
        this.price = p;
    }
    valueOf() {
        return this.price;
    }
}

p1 = new Product("Iphone11", 100); 
p2 = new Product("Iphone12", 200); 

console.log(p1<p2); //true and it compare the p1 and p2 on the basis of product price 