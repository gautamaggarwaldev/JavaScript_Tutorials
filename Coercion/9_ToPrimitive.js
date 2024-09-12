let a = 1 < 2 < 3;  // (1 < 2) < 3 ---> true < 3 ---> 1 < 3 ---> true
console.log(a); //true

let b = 3 > 2 > 1; // (3 > 2) > 1 ---> true > 1 ---> 1 > 1 ---> false
console.log(b); //false