console.log("start");
setTimeout(function timerCB() {
    console.log("timer 1 done");
}, 1000);

const pr = new Promise(function exec(res,rej) {
    console.log("Executor callback triggered by Promise constructor");
    setTimeout(function prCB() {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        if (randomNumber % 2 === 0) { //even
            res(randomNumber); // status fullfilled
        } 
        else { //odd
            rej(randomNumber); // status rejeccted      
        }
    }, 2000);
});

pr.then(function f() {console.log("executing f")}, function g() {console.log("executing g")})
pr.then(function h() {console.log("executing h")}, function i() {console.log("executing i")})

for(let i=0; i < 10000000000; i++) { }
for(let i=0; i < 10000000000; i++) { }

console.log("end");