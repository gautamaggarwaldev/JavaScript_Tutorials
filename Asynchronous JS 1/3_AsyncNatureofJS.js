setTimeout(function f() {
    console.log("hello f")
}, 10);

setTimeout(function g() {
    console.log("hello g")
}, 5);

// console.log("end");
let x = 0;

for(let i=0; i<1000000000; i++) {
    x += i;
}

