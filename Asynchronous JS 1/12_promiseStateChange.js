const pr = new Promise((res, rej) => {
    console.log("Executor callback trigerred by Promise constructor");
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber%2 === 0) { //even
        res(); // status fullfilled
    }
    else { //odd
        rej(); // status rejeccted
    }
})

console.log("Created the Promise Object");
console.log(pr);