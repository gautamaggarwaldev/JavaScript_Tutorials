let product = {
	name : "I phone 15 pro Max",
	company : "Apple",
	price : 157000,
	warranty : "2 year",
	color : "Celestial blackred"
}

console.log(Object.keys(product)); // [ 'name', 'company', 'price', 'warranty', 'color' ]
console.log(Object.values(product)); // ['I phone 15 pro Max', 'Apple', 157000, '2 year', 'Celestial blackred' ]
console.log(Object.entries(product));   
console.log(Object.keys(product).length); // 5