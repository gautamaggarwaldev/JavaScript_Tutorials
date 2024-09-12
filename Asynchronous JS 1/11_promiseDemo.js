const pr = new Promise((res, rej) => {
    console.log("Executor callback trigerred by Promise constructor");
    for(let i=0; i<10000000000; i++) {}
})

console.log("Created the Promise Object");
console.log(pr);