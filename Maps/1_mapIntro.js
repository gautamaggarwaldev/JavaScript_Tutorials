const fruits = new Map([
    ["apples", 300],  // [key, value]
    ["mangoes", 500],
    ["bananas", 100]
])

fruits.set("orange", 250);
fruits.set("Litchi", 650);

console.log(fruits);
console.log(typeof fruits); //object
console.log(fruits instanceof Map); //true

console.log(fruits.get("Litchi")); // --> gives the value

console.log(fruits.size);
fruits.delete("apples");
console.log(fruits);



