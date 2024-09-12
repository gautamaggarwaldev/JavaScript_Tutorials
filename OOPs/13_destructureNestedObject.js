const product  = {discount: 45, name: "Iphone", price: 125000, category: {name:"Mobiles", categoryId: 746523, type: {typeId: 154987, typeName: "Electronics"}}};


console.log(product);


const {category: {categoryId}} = product;
console.log(categoryId);
// console.log(category); --> throws error


const {category: {type: {typeName}}} = product;
console.log(typeName);


const {discount = 50} = product;
console.log(discount);
