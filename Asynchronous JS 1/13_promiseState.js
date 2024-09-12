const pr = new Promise(function exce(res, rej) {
    console.log("Executor callback trigerred by Promise constructor");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        if (randomNumber % 2 === 0) { //even
            console.log("Promise Status: fulfilled");
            res(); // status fullfilled
        } 
        else { //odd
            console.log("Promise Status: rejected");
            rej(); // status rejeccted
        }
    }, 5000);
});

console.log("Created the Promise Object");
console.log(pr);