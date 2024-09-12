const obj = {a:10, b:20};
Object.preventExtensions(obj);
console.log(obj);
obj.a = 100; //it update the value of existing key
console.log(obj);
obj.c = 30; //it not allow to add new key-value pair
console.log(obj);
delete obj.a; // it delete the existing key-value pair
console.log(obj);
