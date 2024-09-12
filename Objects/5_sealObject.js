const obj1 = {name : "garima", age : 27, salary : 155000};
Object.seal(obj1); // it will allow to change the existing value of key but not add the new key-value pair.
console.log(obj1);
obj1.address = "delhi"; //new addition not allowed
console.log(obj1);
delete obj1.age;
console.log(obj1);
obj1.name = "gautam";
console.log(obj1); 

console.log(Object.isSealed(obj1)); //true
console.log(Object.isFrozen(obj1)); //false