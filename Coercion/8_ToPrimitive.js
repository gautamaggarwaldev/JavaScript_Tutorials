function fun() {}

console.log("My function name is " + fun); //My function name is function fun() {}

console.log(fun.valueOf());// [Function: fun]
console.log(fun.toString());// function fun() {}

fun.toString = function() {return "fun";}

console.log("My function name is " + fun); //My function name is fun