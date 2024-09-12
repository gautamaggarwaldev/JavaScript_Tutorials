x = {a:10};

console.log(x.toString()); //[object Object]
console.log(x.valueOf()); // { a: 10 }

y = {a:10, b:20, toString: function() {console.log("My toString()");}}
y.valueOf = function() {return 999;}
y.toString();// My toString()
console.log(y.valueOf()); //999