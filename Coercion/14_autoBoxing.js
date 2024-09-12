/*When you attempt to access a method or property on a primitive type, 
JavaScript automatically converts the primitive to its corresponding object wrapper, 
performs the operation, and then discards the temporary object.*/


let x = 10;

console.log(x.toString());
console.log(typeof x); //number

// console.log(50.toString()); ---> throws error

console.log((50).toString()); //50


console.log("garima".toString()); //garima
console.log("garima".valueOf()); //garima