class Product {
    #name;
    #price; 
    #category;
    #description;
    #rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        if(productName === undefined || productPrice === undefined || productCategory === undefined || productDescription === undefined || productRating === undefined) {
                console.log("Invalid parameters");
                return;
        }
        this.#name = productName;
        if(productPrice > 0 && typeof(productPrice)==="number") {
            this.#price = productPrice;
        }
        this.category = productCategory;
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

    setCategory(c) {
        if(c == undefined) {
            console.log("invalid category");
            return;
        }
        else {
            this.#category = c;
        }
    }

    getCategory() {
        return this.#category;
    }

    get description() {
        console.log("Getter called");
        return this.#description;
    }

    set description(d) { 
        if(d.length == 0) {
            console.log("invalid description");
            return;
        }
        this.#description = d;
    }

    addToCart() {
        console.log("Product is added");
    }

    removeFromCart() {
        console.log("Product is removed");
    }

    displayProduct() {
        console.log("Product displayed", this.#name, this.#price, this.category, this.description, this.rating);
    }

    buyProduct() {
        console.log("Product bought");
    }
}

let iphone = new Product("Iphone 11", 900, "Electronics", "Apple Iphone 11", 4.5);

console.log(iphone);

iphone.description = ""; //this call the setter function
console.log(iphone.description); //this call getter function
iphone.displayProduct();

