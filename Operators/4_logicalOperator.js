//AND
console.log("&&");
console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log((5>2) && (8<9));
console.log((4>8) && (7<3));

//OR 
console.log("||");
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log((5>2) || (8<9));
console.log((4>8) || (7<3));

//NOT
console.log("!");
console.log(!true);
console.log(!false);

//nullish coalescing operator
console.log("??");
let x = 10 ?? 20;
console.log(x);
let y = "garima" ?? 20;
console.log(y);
let z = null ?? 20;
console.log(z);
let w = undefined ?? 20;
console.log(w);
let q = "" ?? 20;
console.log(q);