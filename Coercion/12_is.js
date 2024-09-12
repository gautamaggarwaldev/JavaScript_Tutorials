// Object.is() ------> is used to check whether y is 0 or -0


let y = -0

console.log(Object.is(y,0)) //false
console.log(Object.is(y,-0)) //true