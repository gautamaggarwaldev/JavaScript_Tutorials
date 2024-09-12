console.log("start");


setTimeout(function f() {
    console.log("Timer done 1...");
}, 300);

setTimeout(function f() {
    console.log("Timer done 2...");
}, 0);


console.log("end");

for(let i=0; i<10000000000; i++) {}