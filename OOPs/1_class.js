class Product {
    #name;
    #price; 
    #category;
    description;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.#name = productName;
        this.#price = productPrice;
        this.#category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    setPrice(p) {
        if(p>0) {
            this.#price = p;
        }
        else {
            console.log("invalid price");
        }
    }

    getPrice() {
        return this.#price;
    }

    getName() {
        return this.#name;
    }

    setName(n) {
        this.#name = n;
    }

    getCategory(c) {
        if(c == undefined) {
            console.log("invalid category");
            return;
        }
        else {
            this.#category = c;
        }
    }

    addToCart() {
        console.log("Product is added");
    }
    removeFromCart() {
        console.log("Product is removed");
    }
    displayProduct() {
        console.log("Product displayed", this.#name, this.#price, this.category);
    }
    buyProduct() {
        console.log("Product bought");
    }
}

console.log(typeof Product); //function

let iphone = new Product("Iphone 6s", 145000, "Mobile", "16 series", 4.7);
// let iphone = new Product();
console.log(iphone);

// iphone.name = "iphone X";
// iphone.price = 125000;
// iphone.category = "electronics";

iphone.setPrice(999);

iphone.displayProduct();

console.log(iphone.getPrice());
 

// iphone.#name = "something"; throws errror because name is private data member of the product class which is not accessible outside the class

