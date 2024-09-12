const product  = {discount: 45, name: "Iphone", price: 125000, category: {name:"Mobiles", categoryId: 746523, type: {typeId: 154987, typeName: "Electronics"}}};

const {discount, ...ProductWithoutDiscount} = product;

console.log(discount);

console.log(ProductWithoutDiscount);
