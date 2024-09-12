console.log("start");
const p1 = new Promise((res,rej) => {
    console.log("Executor callback triggered by Promise constructor: p1");
    setTimeout(function p1CB() {
        console.log("Timer of p1 done");
        res(10);
    },500); 
});

p1.then(function a() {console.log("executing a")}, function b() {console.log("executing b")});

setTimeout(function timerCB() {
    console.log("timer 1 done");
}, 4000);

const pr = new Promise(function exec(res,rej) {
    console.log("Executor callback triggered by Promise constructor: pr");
    setTimeout(function prCB() {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        if (randomNumber % 2 === 0) { //even
            res(randomNumber); // status fullfilled
        } 
        else { //odd
            rej(randomNumber); // status rejeccted      
        }
    }, 4000);
});

pr.then(function f(v) {console.log("executing f", v)}, function g(v) {console.log("executing g", v)})
pr.then(function h(v) {console.log("executing h", v)}, function i(v) {console.log("executing i", v)})

for(let i=0; i < 10000000000; i++) { }
for(let i=0; i < 10000000000; i++) { }

console.log("end");