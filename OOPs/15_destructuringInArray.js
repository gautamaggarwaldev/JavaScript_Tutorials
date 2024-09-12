const state = [10, function setValue() {}];

const [value, setValue] = state;

console.log(value);
console.log(setValue);



const arr = [20, function setValue() {}];

const [values, setter] = arr;

console.log(values);
console.log(setter);



const x = [1,2,3];
const y = [4,5,6,...x];

console.log(y)