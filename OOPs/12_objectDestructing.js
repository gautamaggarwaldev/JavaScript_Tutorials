const product = {name: "Iphone 16 pro max", price: 165000, category: "Mobiles"};

const {name: productName, price: productPrice, category} = product;

// console.log(name); --> throws error
console.log(productName);
// console.log(price); --> throws error
console.log(productPrice);
console.log(category);