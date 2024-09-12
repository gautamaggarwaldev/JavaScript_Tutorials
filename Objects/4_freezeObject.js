const o = {x : 10, y: 100};
Object.freeze(o); //this freeze function make the object fully immutable. It creates a frozen object
console.log(o);
o.x = 500;
console.log(o);
o.z = 420;
console.log(o);
delete o.x;
console.log(o);

console.log(Object.isFrozen(o)); //true
console.log(Object.isSealed(o)); //true