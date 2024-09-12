function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;

    this.displayProduct = function () {
        console.log("name:", this.name, "price:", this.price, "description:", this.description);
    }

}
let a = new Product("Iphone 11", 125000, "Apple Iphone");
a.displayProduct();
a;

let b = new Product("S24", 15000, "Samsung");
b.displayProduct();
b; 