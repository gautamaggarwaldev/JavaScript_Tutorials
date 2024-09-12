let x = 10;

console.log(`Value of x is ${x}`); //Value of x is 10

let y = {};
console.log(`Value of x is ${y}`); //Value of x is [object Object]


s = "1234";
console.log(s); //string
+s;
console.log(s); //number

console.log(!!s) //true --> boolean

console.log(Number("7412")) // string ---> number
console.log(Number("")) // empty string ---> 0
console.log(Number("-0")) // string ---> -0


console.log(String(102)); //number to string
console.log(String(0)); //0
console.log(String(-0)); //0