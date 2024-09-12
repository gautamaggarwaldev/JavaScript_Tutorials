const map = new Map([
    ["car", 1],
    ["bike", 2],
    ["boat", 3],
    ["aeroplane", 4],
    ["train", 5]
])

console.log(map);
//map.clear(); // --> remove all keys from map
let ans = map.has("bike");
console.log(ans);


let text = "";
map.forEach(function(value,key) {
    text += key + ": " + value + ", ";
})
console.log(text);



text = "";
for (const x of map.entries()) {
  text += x;
}

console.log(text);



text = "";
for (const x of map.keys()) {
  text += x + ", ";
}
console.log(text);


text = "";
for (const x of map.values()) {
  text += x + ", ";
}
console.log(text);