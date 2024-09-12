class Product {

    static x = 10; //static member are those member which are associated with `class` not `object` 
        
    constructor(name,price) {
        this.name = name;
        this.price = price;
        console.log(Product.x);
    }
}

let a = new Product("Laptop", 80000);
// console.log(a);
// console.log(a.x);  --> undefined
Product.x = 20; 
console.log(Product.x);