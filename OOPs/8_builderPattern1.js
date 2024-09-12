class Product {
    constructor(builder) {
        this.name = builder.name;
        if(builder.price > 0 && typeof(builder.price)==="number") {
            this.price = builder.price;
        }
        else {
            return {};
        }
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating;
    }

    get price() {
        return this._price;
    }

    set price(p) {
        if(p>0) {
            this._price = p;
        }
        else {
            console.log("Invalid price");
        }
    }
}

const p1 = new Product({
    name: "Iphone",
    price: 10000,
    category: "Mobile",
    description: "Apple Iphone",
    rating: 4.8
});

console.log(p1);
p1.price = 100; //set
console.log(p1.price); //get