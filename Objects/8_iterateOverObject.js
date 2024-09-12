const product = {
	name : "I phone 15 pro Max",
	company : "Apple",
	price : 157000,
	warranty : "2 year",
	color : "Celestial blackred"
}

console.log(Object.keys(product));

let a = Object.keys(product);
for(let i=0; i<a.length; i++) {
    Object.defineProperty(product, a[i], {writable: false, configurable: false});
}

product.name = "nokia";
console.log(product);
delete product.price;
console.log(product);

Object.preventExtensions(product);
product.battery = "4580mah";
console.log(product);