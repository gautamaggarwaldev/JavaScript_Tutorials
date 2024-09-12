console.log("start...")

setTimeout(() => {
    console.log("Timer 1 done!");
}, 100);

setTimeout(() => {
    console.log("Timer 2 done!");
}, 0);

console.log("end.");

for(let i=0;i<10000000000;i++){}