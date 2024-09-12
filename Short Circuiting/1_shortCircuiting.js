// falsy values --->  null, undefined, +0,-0,NaN,"" 

console.log(10 && 30);
console.log(20 && null);
console.log(null && 30);
console.log(undefined && 80);
console.log("hello" && -0);
console.log("" && 20);

console.log(10 || 30);
console.log(20 || null);
console.log(null || 30);
console.log(undefined || 80);
console.log("hello" || -0);
console.log("" || 20);