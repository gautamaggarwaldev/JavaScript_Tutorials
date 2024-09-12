const a = {x:10, y: 20};
Object.defineProperty(a, 'x', {writable: false}); //it allow to change the value of 'y' but not 'x'
console.log(a);
a.x = 100; //not update the value
console.log(a);
a.y = 200; //update the value
console.log(a);
Object.defineProperty(a, 'y', {configurable: false}); //it not delete the y but allow to delete other key-value pairs present in the object
delete a.x;
console.log(a);
delete a.y;
console.log(a);