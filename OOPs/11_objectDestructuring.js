const product = {name: "Iphone 16 pro", price: 125000, category: "Mobiles"};
const {name, Productprice, category} = product; // object destructuring
console.log(product);
console.log(name);
console.log(Productprice); //undefined 
console.log(category);


const purchasedProduct = {orderId: 125974, orderDate: "11-02-2025", ...product};
console.log(purchasedProduct);

const purchasedProduct1 = {price:165, orderId: 125974, orderDate: "11-02-2025", ...product};
console.log(purchasedProduct1);

const purchasedProduct2 = {orderId: 125974, orderDate: "11-02-2025", ...product, price: 199};
console.log(purchasedProduct2);