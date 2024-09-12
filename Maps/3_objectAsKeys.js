apples = { name: "apple" };
mangoes = { name: "mango" };
oranges = { name: "orange" };


const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(mangoes, 300);
fruits.set(oranges, 200);

console.log(fruits);



const fruit = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

// Callback function to Group Elements
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruit, myCallback);


let text ="These fruits are Ok: ";
for (let x of result.get("ok")) {
  text += x.name + " " + x.quantity + " ";
}
console.log(text); //These fruits are Ok: apples 300 bananas 500

text = "";
text += "These fruits are low: ";
for (let x of result.get("low")) {
    text += x.name + " " + x.quantity + " ";
}
console.log(text); //These fruits are low: oranges 200 kiwi 150 
